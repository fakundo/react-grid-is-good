import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPropValue, applyPrefixes, calcSize } from './utils';

export default class Span extends Component {

  static propTypes = {
    className: PropTypes.any,
    children: PropTypes.any,
    size: PropTypes.any,
    pull: PropTypes.any,
    push: PropTypes.any,
    offset: PropTypes.any,
    break: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    valign: PropTypes.oneOf(['top', 'middle', 'bottom'])
  };

  static defaultProps = {
    size: 1,
    pull: 0,
    push: 0,
    offset: 0,
    break: false
  };

  static contextTypes = {
    grid: PropTypes.object
  };

  getGridProps() {
    return this.context.grid;
  }

  getSpanPropValue(name) {
    const { breakpoint } = this.getGridProps();
    return getPropValue(name, breakpoint, this.props);
  }

  getGridPropValue(name) {
    const gridProps = this.getGridProps();
    const { breakpoint } = gridProps;
    return getPropValue(name, breakpoint, gridProps);
  }

  getStyles() {
    const pull = this.calcSize(this.getSpanPropValue('pull'));
    const push = this.calcSize(this.getSpanPropValue('push'));
    const offset = this.calcSize(this.getSpanPropValue('offset'));
    const gutter = this.getGridPropValue('gutter');
    const align = this.getSpanPropValue('align') || this.getGridPropValue('align');
    const valign = this.getSpanPropValue('valign');
    const width = this.calcSize(this.getSpanPropValue('size'));

    return {
      position: 'relative',
      minHeight: '1px', // Prevent collapsing
      boxSizing: 'border-box',
      paddingLeft: gutter / 2,
      paddingRight: gutter / 2,
      textAlign: align,
      left: pull !== '0%' ? `-${pull}` : (push !== '0%' ? push : ''),
      marginLeft: offset,
      // Flex styles
      // Prevent columns from becoming too narrow when at smaller grid tiers by
      // always setting `width: 100%;`. This works because we use `flex` values
      // later on to override this initial width.
      width: '100%',
      ...applyPrefixes('Flex', `0 0 ${width}`),
      // Add a `max-width` to ensure content within each column does not blow out
      // the width of the column. Applies to IE10+ and Firefox. Chrome and Safari
      // do not appear to require this.
      maxWidth: width,
      // Vertical align
      ...(valign ? {
        ...applyPrefixes('AlignSelf', ({
          top: 'flex-start',
          middle: 'center',
          bottom: 'flex-end'
        }[valign])),
        MsFlexItemAlign: ({
          top: 'start',
          middle: 'center',
          bottom: 'end'
        }[valign])
      } : {})
    };
  }

  calcSize(size) {
    const gridSize = this.getGridPropValue('size');
    return calcSize(size, gridSize);
  }

  render() {
    const { className, children } = this.props;
    return (
      <div
        className={className}
        style={this.getStyles()}
      >
        { children }
      </div>
    );
  }

}
