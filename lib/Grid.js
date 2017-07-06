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

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

var _utils = require('./utils');

var _Break = require('./Break');

var _Break2 = _interopRequireDefault(_Break);

var _Span = require('./Span');

var _Span2 = _interopRequireDefault(_Span);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function (_Component) {
  (0, _inherits3.default)(Grid, _Component);

  function Grid() {
    (0, _classCallCheck3.default)(this, Grid);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).call(this));

    _this.id = (0, _uniqueId2.default)('rgig-grid');
    return _this;
  }

  (0, _createClass3.default)(Grid, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        grid: this.props
      };
    }
  }, {
    key: 'getGridPropValue',
    value: function getGridPropValue(name) {
      var breakpoint = this.props.breakpoint;

      return (0, _utils.getPropValue)(name, breakpoint, this.props);
    }
  }, {
    key: 'getSpanWidth',
    value: function getSpanWidth(spanProps, gridSize) {
      var breakpoint = this.props.breakpoint;

      var spanSize = (0, _utils.getPropValue)('size', breakpoint, spanProps);
      return (0, _utils.calcSize)(spanSize, gridSize);
    }
  }, {
    key: 'getSpanBreak',
    value: function getSpanBreak(spanProps) {
      var breakpoint = this.props.breakpoint;

      return (0, _utils.getPropValue)('break', breakpoint, spanProps);
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var gutter = this.getGridPropValue('gutter');
      var valign = this.getGridPropValue('valign');
      return (0, _extends3.default)({
        marginLeft: -gutter / 2,
        marginRight: -gutter / 2
      }, (0, _utils.applyPrefixes)('FlexWrap', 'wrap'), (0, _utils.applyPrefixes)('AlignItems', {
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end'
      }[valign]), {
        // MS valign fix
        MsFlexAlign: {
          top: 'start',
          middle: 'center',
          bottom: 'end'
        }[valign]
      });
    }
  }, {
    key: 'renderStyleTag',
    value: function renderStyleTag() {
      var content = ['#' + this.id + '{', 'display: -webkit-flex;', 'display: -moz-flex;', 'display: -ms-flex;', '}'];
      return _react2.default.createElement('style', {
        dangerouslySetInnerHTML: { __html: content.join(' ') }
      });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      var gridSize = this.getGridPropValue('size');
      var nextChildren = [];
      var widthCounter = 0;
      _react.Children.forEach(this.props.children, function (child, index) {
        if (child) {
          var spanProps = (0, _assign2.default)({}, _Span2.default.defaultProps, child.props);
          var spanBreak = _this2.getSpanBreak(spanProps);
          var spanWidth = _this2.getSpanWidth(spanProps, gridSize);
          widthCounter += spanWidth;
          if (widthCounter > 100 || spanBreak) {
            widthCounter = spanWidth;
            nextChildren.push(_react2.default.createElement(_Break2.default, { key: 'break' + index }));
          }
          nextChildren.push(child);
        }
      });
      return nextChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          id: this.id,
          className: this.props.className,
          style: this.getStyles()
        },
        this.renderStyleTag(),
        this.renderChildren()
      );
    }
  }]);
  return Grid;
}(_react.Component);

Grid.propTypes = {
  className: _propTypes2.default.any,
  children: _propTypes2.default.any,
  breakpoint: _propTypes2.default.string,
  size: _propTypes2.default.number,
  gutter: _propTypes2.default.number,
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  valign: _propTypes2.default.oneOf(['top', 'middle', 'bottom'])
};
Grid.defaultProps = {
  size: 12,
  gutter: 0,
  align: 'left',
  valign: 'top'
};
Grid.childContextTypes = {
  grid: _propTypes2.default.object
};
exports.default = Grid;
//# sourceMappingURL=Grid.js.map
