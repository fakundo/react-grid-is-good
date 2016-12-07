var React = require('react');
var update = require('react-addons-update');
var utils = require('../utils');
var SpanImpl = require('./SpanImpl');

module.exports = React.createClass({

  displayName: 'Span',

  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.any,
    size: React.PropTypes.any,
    pull: React.PropTypes.any,
    push: React.PropTypes.any,
    offset: React.PropTypes.any,
    break: React.PropTypes.any,
    align: React.PropTypes.any,
    valign: React.PropTypes.any
  },

  contextTypes: {
    grid: React.PropTypes.object
  },

  render: function() {
    var breakpoint = this.context.grid.breakpoint;
    var breakpointProps = utils.pick(this.props, 'size', 'pull', 'push', 'offset', 'break', 'align', 'valign');
    var props = utils.pick(this.props, 'className', 'children');

    props = update(props, {
      $merge: utils.getBreakpointValues(breakpointProps, breakpoint)
    });

    return React.createElement(SpanImpl, props);
  }

});
