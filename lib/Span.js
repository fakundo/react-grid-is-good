'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Span = function (_Component) {
  (0, _inherits3.default)(Span, _Component);

  function Span() {
    (0, _classCallCheck3.default)(this, Span);
    return (0, _possibleConstructorReturn3.default)(this, (Span.__proto__ || (0, _getPrototypeOf2.default)(Span)).apply(this, arguments));
  }

  (0, _createClass3.default)(Span, [{
    key: 'getGridProps',
    value: function getGridProps() {
      return this.context.grid;
    }
  }, {
    key: 'getSpanPropValue',
    value: function getSpanPropValue(name) {
      var _getGridProps = this.getGridProps(),
          breakpoint = _getGridProps.breakpoint;

      return (0, _utils.getPropValue)(name, breakpoint, this.props);
    }
  }, {
    key: 'getGridPropValue',
    value: function getGridPropValue(name) {
      var gridProps = this.getGridProps();
      var breakpoint = gridProps.breakpoint;

      return (0, _utils.getPropValue)(name, breakpoint, gridProps);
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var pull = this.calcSize(this.getSpanPropValue('pull'));
      var push = this.calcSize(this.getSpanPropValue('push'));
      var offset = this.calcSize(this.getSpanPropValue('offset'));
      var gutter = this.getGridPropValue('gutter');
      var align = this.getSpanPropValue('align') || this.getGridPropValue('align');
      var valign = this.getSpanPropValue('valign');
      var width = this.calcSize(this.getSpanPropValue('size'));

      return (0, _extends3.default)({
        position: 'relative',
        minHeight: '1px', // Prevent collapsing
        boxSizing: 'border-box',
        paddingLeft: gutter / 2,
        paddingRight: gutter / 2,
        textAlign: align,
        left: pull !== '0%' ? '-' + pull : push !== '0%' ? push : '',
        marginLeft: offset,
        // Flex styles
        // Prevent columns from becoming too narrow when at smaller grid tiers by
        // always setting `width: 100%;`. This works because we use `flex` values
        // later on to override this initial width.
        width: '100%'
      }, (0, _utils.applyPrefixes)('Flex', '0 0 ' + width), {
        // Add a `max-width` to ensure content within each column does not blow out
        // the width of the column. Applies to IE10+ and Firefox. Chrome and Safari
        // do not appear to require this.
        maxWidth: width
      }, valign ? (0, _extends3.default)({}, (0, _utils.applyPrefixes)('AlignSelf', {
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end'
      }[valign]), {
        MsFlexItemAlign: {
          top: 'start',
          middle: 'center',
          bottom: 'end'
        }[valign]
      }) : {});
    }
  }, {
    key: 'calcSize',
    value: function calcSize(size) {
      var gridSize = this.getGridPropValue('size');
      return (0, _utils.calcSize)(size, gridSize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;

      return _react2.default.createElement(
        'div',
        {
          className: className,
          style: this.getStyles()
        },
        children
      );
    }
  }]);
  return Span;
}(_react.Component);

Span.propTypes = {
  className: _propTypes2.default.any,
  children: _propTypes2.default.any,
  size: _propTypes2.default.any,
  pull: _propTypes2.default.any,
  push: _propTypes2.default.any,
  offset: _propTypes2.default.any,
  break: _propTypes2.default.bool,
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  valign: _propTypes2.default.oneOf(['top', 'middle', 'bottom'])
};
Span.defaultProps = {
  size: '100%',
  pull: 0,
  push: 0,
  offset: 0,
  break: false
};
Span.contextTypes = {
  grid: _propTypes2.default.object
};
exports.default = Span;
module.exports = exports['default'];
//# sourceMappingURL=Span.js.map
