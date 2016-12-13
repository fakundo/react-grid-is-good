var React = require('react');

module.exports = React.createClass({

  displayName: 'Break',

  getStyle: function() {
    return {
      width: '100%',
      clear: 'both'
    };
  },

  render: function() {
    return React.createElement('div', {
      style: this.getStyle()
    });
  }

});
