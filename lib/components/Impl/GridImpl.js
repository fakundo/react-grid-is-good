var React = require('react');
var utils = require('../../utils');
var FlexStyle = require('./FlexStyle');
var Break = require('./Break');

module.exports = React.createClass({

  displayName: 'GridImpl',

  propTypes: {
    className: React.PropTypes.any,
    children: React.PropTypes.any,
    flex: React.PropTypes.bool,
    breakpoint: React.PropTypes.string,
    size: React.PropTypes.number,
    gutter: React.PropTypes.number,
    align: React.PropTypes.oneOf(['left', 'center', 'right']),
    valign: React.PropTypes.oneOf(['top', 'middle', 'bottom'])
  },

  childContextTypes: {
    grid: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      flex: true,
      size: 12,
      gutter: 20,
      align: 'left',
      valign: 'top'
    };
  },

  getInitialState: function() {
    this.id = utils.uniqueId('rgig-');
    return null;
  },

  getChildContext: function() {
    return {
      grid: utils.pick(this.props, 'size', 'flex', 'breakpoint', 'gutter', 'align')
    };
  },

  getSpanWidth: function(spanProps) {
    var spanSize = utils.getBreakpointValue(spanProps.size, this.props.breakpoint);
    return utils.calcSize(spanSize, this.props.size);
  },

  getSpanBreak: function(spanProps) {
    return utils.getBreakpointValue(spanProps.break, this.props.breakpoint);
  },

  applyFlexStyles: function(style) {
    utils.applyPrefixes(style, 'flexWrap', 'wrap');
    utils.applyPrefixes(style, 'alignItems', ({
      top: 'flex-start',
      middle: 'center',
      bottom: 'flex-end'
    }[this.props.valign]));
    style.MsFlexAlign = ({
      top: 'start',
      middle: 'center',
      bottom: 'end'
    }[this.props.valign]);
    return style;
  },

  getStyle: function() {
    var style = {
      marginLeft: -this.props.gutter/2,
      marginRight: -this.props.gutter/2,
    };
    return this.props.flex ?
      this.applyFlexStyles(style) :
      style;
  },

  renderChildren: function() {
    var that = this;
    var widthCounter = 0;
    var children = [];
    React.Children.forEach(this.props.children, function(child, index) {
      var spanWidth = that.getSpanWidth(child.props);
      var spanBreak = that.getSpanBreak(child.props);
      spanWidth = parseInt(spanWidth, 10);
      widthCounter += spanWidth;
      if (widthCounter > 100 || spanBreak) {
        widthCounter = spanWidth;
        children.push(React.createElement(Break, { key: 'break-' + index }));
      }
      children.push(child);
    });
    return children;
  },

  renderClearfix: function() {
    return !this.props.flex ?
      React.createElement('div', { style: {
        display: 'table',
        clear: 'both'
      }}) :
      null;
  },

  renderFlexStyleElement: function() {
    return this.props.flex ?
      React.createElement(FlexStyle, { id: this.id }) :
      null;
  },

  render: function() {
    return React.createElement('div', {
        id: this.id,
        style: this.getStyle(),
        className: this.props.className,
        'data-valign': this.props.valign
      },
      this.renderFlexStyleElement(),
      this.renderClearfix(),
      this.renderChildren(),
      this.renderClearfix()
    );
  }

});
