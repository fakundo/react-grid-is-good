var React = require('react');
var ReactDOM = require('react-dom');
var ReactGridSystem = require('../lib');

var TestComponent = React.createClass({

  displayName: 'TestComponent',

  getInitialState() {
    return {
      size: this.getSize()
    };
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  getSize: function() {
    var width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    switch (true) {
      case width < 628: return 'xs';
      case width < 1024: return 'sm';
      case width < 1280: return 'md';
      default: return 'lg';
    }
  },

  handleResize: function() {
    this.setState({
      size: this.getSize()
    });
  },

  renderContent: function(children) {
    return React.createElement('div', {
      style: {
        backgroundColor: 'red',
        border: '1px solid blue',
        minHeight: '30px'
      },
      children: children
    });
  },

  renderMultiline: function(children) {
    return React.createElement('div', {},
      children,
      React.createElement('br'),
      children,
      React.createElement('br'),
      children,
      React.createElement('br'),
      children,
      React.createElement('br'),
      children
    );
  },

  getSpans: function() {
    return [
      {
        children: this.renderContent(this.renderMultiline('span 1a')),
        size: '1/4'
      },
      {
        children: this.renderContent('span 1b'),
        size: '1/4',
        valign: 'middle'
      },
      {
        children: this.renderContent('span 1c'),
        size: '2/4'
      },
      {
        children: this.renderContent('span 2'),
        size: '4/4'
      },
      {
        children: this.renderContent('span 3a pushed'),
        size: '1/4',
        push: '3/4'
      },
      {
        children: this.renderContent('span 3b pulled'),
        size: '3/4',
        pull: '1/4'
      },
      {
        children: this.renderContent('span 4a offset'),
        size: '2/4',
        offset: '1/4',
        break: true
      },
      {
        children: this.renderContent('span 4b'),
        size: '1/4'
      },
      {
        children: this.renderContent('responsive span 5a'),
        size: { 'sm,md,lg': '50%' },
        align: { xs: 'center' }
      },
      {
        children: this.renderContent('responsive span 5b'),
        size: { 'sm,md,lg': '50%' },
        align: { xs: 'center' }
      }
    ];
  },

  renderFloatGrid: function() {
    return React.createElement(
      ReactGridSystem.Grid,
      { flex: false, breakpoint: this.state.size },
      this.getSpans().map(function(spanProps, index) {
        spanProps.key = index;
        return React.createElement(ReactGridSystem.Span, spanProps);
      })
    );
  },

  renderFlexGrid: function() {
    return React.createElement(
      ReactGridSystem.Grid,
      { flex: true, breakpoint: this.state.size, gutter: { xs: 50 } },
      this.getSpans().map(function(spanProps, index) {
        spanProps.key = index;
        return React.createElement(ReactGridSystem.Span, spanProps);
      })
    );
  },

  renderVisible: function() {
    return React.createElement(ReactGridSystem.Visible, {
      breakpoint: this.state.size,
      xs: true,
      sm: true
    }, 'Visible when "xs" or "sm" only');
  },

  renderHidden: function() {
    return React.createElement(ReactGridSystem.Hidden, {
      breakpoint: this.state.size,
      md: true,
      lg: true
    }, 'Hidden when "md" or "lg" only');
  },

  render: function() {
    return React.createElement('div', {},
      this.renderFloatGrid(),
      React.createElement('hr'),
      this.renderFlexGrid(),
      React.createElement('hr'),
      this.renderVisible(),
      React.createElement('hr'),
      this.renderHidden()
    );
  }

});

ReactDOM.render(React.createElement(TestComponent), document.querySelector('#app'));
