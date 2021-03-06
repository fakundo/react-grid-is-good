'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Visible = function (_Component) {
  (0, _inherits3.default)(Visible, _Component);

  function Visible() {
    (0, _classCallCheck3.default)(this, Visible);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Visible.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        breakpoint = _props.breakpoint;


    if (this.props[breakpoint]) {
      return _react.Children.only(children);
    }

    return null;
  };

  return Visible;
}(_react.Component);

Visible.propTypes = {
  children: _propTypes2.default.any,
  breakpoint: _propTypes2.default.string
};
exports.default = Visible;
//# sourceMappingURL=Visible.js.map
