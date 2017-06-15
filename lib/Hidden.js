'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hidden = function (_Component) {
  (0, _inherits3.default)(Hidden, _Component);

  function Hidden() {
    (0, _classCallCheck3.default)(this, Hidden);
    return (0, _possibleConstructorReturn3.default)(this, (Hidden.__proto__ || (0, _getPrototypeOf2.default)(Hidden)).apply(this, arguments));
  }

  (0, _createClass3.default)(Hidden, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          breakpoint = _props.breakpoint;


      if (!this.props[breakpoint]) {
        return _react2.default.createElement(
          'div',
          { className: className },
          children
        );
      }

      return null;
    }
  }]);
  return Hidden;
}(_react.Component);

Hidden.propTypes = {
  className: _propTypes2.default.any,
  children: _propTypes2.default.any,
  breakpoint: _propTypes2.default.string
};
exports.default = Hidden;
module.exports = exports['default'];
//# sourceMappingURL=Hidden.js.map
