import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import { getPropValue, applyPrefixes, calcSize } from './utils';
import Break from './Break';

export default class Grid extends Component {

  static propTypes = {
    className: PropTypes.any,
    children: PropTypes.any,
    breakpoint: PropTypes.string,
    size: PropTypes.any,
    gutter: PropTypes.number,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  };

  static defaultProps = {
    size: '100%',
    gutter: 0,
    align: 'left',
    valign: 'top'
  };

  static childContextTypes = {
    grid: PropTypes.object
  };

  constructor() {
    super();
    this.id = uniqueId('rgig-grid');
  }

  getChildContext() {
    return {
      grid: this.props
    };
  }

  getGridPropValue(name) {
    const { breakpoint } = this.props;
    return getPropValue(name, breakpoint, this.props);
  }

  getSpanWidth(spanProps, gridSize) {
    const { breakpoint } = this.props;
    const spanSize = getPropValue('size', breakpoint, spanProps);
    return calcSize(spanSize, gridSize);
  }

  getSpanBreak(spanProps) {
    const { breakpoint } = this.props;
    return getPropValue('break', breakpoint, spanProps);
  }

  getStyles() {
    const gutter = this.getGridPropValue('gutter');
    const valign = this.getGridPropValue('valign');
    return {
      marginLeft: -gutter / 2,
      marginRight: -gutter / 2,
      // Flex styles
      ...applyPrefixes('FlexWrap', 'wrap'),
      // Vertical align
      ...applyPrefixes('AlignItems', ({
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end'
      })[valign]),
      // MS valign fix
      MsFlexAlign: ({
        top: 'start',
        middle: 'center',
        bottom: 'end'
      }[valign])
    };
  }

  renderStyleTag() {
    const content = [
      `#${this.id}{`,
      'display: -webkit-flex;',
      'display: -moz-flex;',
      'display: -ms-flex;',
      '}'
    ];
    return React.createElement('style', {
      dangerouslySetInnerHTML: { __html: content.join(' ') }
    });
  }

  renderChildren() {
    const gridSize = this.getGridPropValue('size');
    const nextChildren = [];
    let widthCounter = 0;
    Children.forEach(this.props.children, (child, index) => {
      const spanBreak = this.getSpanBreak(child.props);
      let spanWidth = this.getSpanWidth(child.props, gridSize);
      spanWidth = parseInt(spanWidth, 10);
      widthCounter += spanWidth;
      if (widthCounter > 100 || spanBreak) {
        widthCounter = spanWidth;
        nextChildren.push(React.createElement(Break, { key: `break${index}` }));
      }
      nextChildren.push(child);
    });
    return nextChildren;
  }

  render() {
    return (
      <div
        id={this.id}
        className={this.props.className}
        style={this.getStyles()}
      >
        { this.renderStyleTag() }
        { this.renderChildren() }
      </div>
    );
  }

}
