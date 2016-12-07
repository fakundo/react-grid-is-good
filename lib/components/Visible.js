var React = require('react');
var utils = require('../utils');

module.exports = React.createClass({

  displayName: 'Visible',

  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.any,
    breakpoint: React.PropTypes.string
  },

  render: function() {
    if (!this.props[this.props.breakpoint]) {
      return null;
    }
    var props = utils.pick(this.props, 'className', 'children');
    return React.createElement('div', props);
  }

});
