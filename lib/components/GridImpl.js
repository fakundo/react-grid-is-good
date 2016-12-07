var React = require('react');
var update = require('react-addons-update');
var utils = require('../utils');
var FlexStyle = require('./FlexStyle');

module.exports = React.createClass({

  displayName: 'GridImpl',

  propTypes: {
    className: React.PropTypes.string,
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

  addBreakToChild: function(child) {
    var newProps = update(child.props, { break: { $set: true } });
    return React.cloneElement(child, newProps);
  },

  renderChildren: function() {
    if (this.props.flex) {
      return this.props.children;
    }
    var that = this;
    var widthCounter = 0;
    return React.Children.map(this.props.children, function(child) {
      var spanWidth = that.getSpanWidth(child.props);
      var spanBreak = that.getSpanBreak(child.props);
      spanWidth = parseInt(spanWidth, 10);
      widthCounter += spanWidth;
      if (widthCounter > 100 || spanBreak) {
        widthCounter = spanWidth;
        return that.addBreakToChild(child);
      }
      return child;
    });
  },

  renderClearfix: function() {
    if (this.props.flex) {
      return null;
    }
    return React.createElement('div', { style: {
      display: 'table',
      clear: 'both'
    }});
  },

  renderStyle: function() {
    if (!this.props.flex) {
      return null;
    }
    return React.createElement(FlexStyle, { id: this.id });
  },

  makeStyle: function() {
    var style = {
      marginLeft: -this.props.gutter/2,
      marginRight: -this.props.gutter/2,
    };
    if (this.props.flex) {
      utils.applyPrefixes(style, 'flexWrap', 'wrap');

      style.MsFlexAlign = ({
        top: 'start',
        middle: 'center',
        bottom: 'end'
      }[this.props.valign]);

      utils.applyPrefixes(style, 'alignItems', ({
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end'
      }[this.props.valign]));
    }
    return style;
  },

  render: function() {
    return React.createElement('div',
      {
        className: this.props.className,
        id: this.id,
        style: this.makeStyle(),
        'data-valign': this.props.valign
      },
      this.renderStyle(),
      this.renderClearfix(),
      this.renderChildren(),
      this.renderClearfix()
    );
  }

});
