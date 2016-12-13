var React = require('react');
var utils = require('../../utils');

module.exports = React.createClass({

  displayName: 'Span',

  propTypes: {
    className: React.PropTypes.any,
    children: React.PropTypes.any,
    size: React.PropTypes.any,
    pull: React.PropTypes.any,
    push: React.PropTypes.any,
    offset: React.PropTypes.any,
    break: React.PropTypes.bool,
    align: React.PropTypes.oneOf(['left', 'center', 'right']),
    valign: React.PropTypes.oneOf(['top', 'middle', 'bottom'])
  },

  contextTypes: {
    grid: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      size: '100%',
      pull: 0,
      push: 0,
      offset: 0,
      break: false
    };
  },

  getContextProp: function(propName) {
    return this.context.grid[propName];
  },

  calcSize: function(spanSize) {
    var gridSize = this.getContextProp('size');
    return utils.calcSize(spanSize, gridSize);
  },

  applyFlexStyles: function(style) {
    var width = this.calcSize(this.props.size);
    // Prevent columns from becoming too narrow when at smaller grid tiers by
    // always setting `width: 100%;`. This works because we use `flex` values
    // later on to override this initial width.
    style.width = '100%';
    utils.applyPrefixes(style, 'flex', '0 0 ' + width);

    // Add a `max-width` to ensure content within each column does not blow out
    // the width of the column. Applies to IE10+ and Firefox. Chrome and Safari
    // do not appear to require this.
    style.maxWidth = width;

    if (this.props.valign) {
      style.MsFlexItemAlign = ({
        top: 'start',
        middle: 'center',
        bottom: 'end'
      }[this.props.valign]);
      utils.applyPrefixes(style, 'alignSelf', ({
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end'
      }[this.props.valign]));
    }
    return style;
  },

  applyFloatStyles: function(style) {
    var width = this.calcSize(this.props.size);
    style.float = 'left';
    style.width = width;
    return style;
  },

  getStyle: function() {
    var pull = this.calcSize(this.props.pull);
    var push = this.calcSize(this.props.push);
    var offset = this.calcSize(this.props.offset);
    var gutter = this.getContextProp('gutter');

    var style = {
      position: 'relative',
      minHeight: '1px', // Prevent collapsing
      boxSizing: 'border-box',
      paddingLeft: gutter / 2,
      paddingRight: gutter / 2,
      textAlign: this.props.align || this.getContextProp('align'),
      left: pull !== '0%' ? '-' + pull : (push !== '0%' ? push : ''),
      marginLeft: offset
    };

    return this.getContextProp('grid') ?
      this.applyFlexStyles(style) :
      this.applyFloatStyles(style);
  },

  render: function() {
    return React.createElement('div', {
      className: this.props.className,
      children: this.props.children,
      style: this.getStyle()
    });
  }

});
