var React = require('react');

module.exports = React.createClass({

  displayName: 'FlexStyle',

  propTypes: {
    id: React.PropTypes.string.isRequired
  },

  shouldComponentUpdate: function() {
    return false;
  },

  renderCss: function() {
    var id = this.props.id;
    return [
      '#' + id + ' {',
        'display: -webkit-flex;',
        'display: -moz-flex;',
        'display: -ms-flex;',
      '}'
    ].join(' ');
  },

  render: function() {
    return React.createElement('style', {
      dangerouslySetInnerHTML: { __html: this.renderCss() }
    });
  }

});
