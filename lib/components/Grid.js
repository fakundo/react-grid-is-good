var React = require('react');
var update = require('react-addons-update');
var utils = require('../utils');
var GridImpl = require('./GridImpl');

module.exports = React.createClass({

  displayName: 'Grid',

  propTypes: {
    className: React.PropTypes.any,
    children: React.PropTypes.any,
    flex: React.PropTypes.bool,
    breakpoint: React.PropTypes.string,
    size: React.PropTypes.any,
    gutter: React.PropTypes.any,
    align: React.PropTypes.any,
    valign: React.PropTypes.any
  },

  render: function() {
    var breakpoint = this.props.breakpoint;
    var breakpointProps = utils.pick(this.props, 'size', 'gutter', 'align', 'valign');
    var props = utils.pick(this.props, 'className', 'children', 'flex', 'breakpoint');

    props = update(props, {
      $merge: utils.getBreakpointValues(breakpointProps, breakpoint)
    });

    return React.createElement(GridImpl, props);
  }

});
