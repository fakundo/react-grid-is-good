'use strict';

exports.__esModule = true;
exports.calcSize = exports.applyPrefixes = exports.getPropValue = undefined;

var _capitalize = require('lodash/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _reduce = require('lodash/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _assign2 = require('lodash/assign');

var _assign3 = _interopRequireDefault(_assign2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPropValue = exports.getPropValue = function getPropValue(name, breakpoint) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return props['' + name + (0, _capitalize2.default)(breakpoint)] || props[name];
};

var applyPrefixes = exports.applyPrefixes = function applyPrefixes(propName, propValue) {
  return (0, _reduce2.default)(['Webkit', 'Moz', 'Ms'], function (acc, prefix) {
    var _assign;

    return (0, _assign3.default)(acc, (_assign = {}, _assign[prefix + propName] = propValue, _assign));
  }, {});
};

var calcSize = exports.calcSize = function calcSize(spanSize, gridSize) {
  // Test percents
  if (/^[0-9]{1,3}%$/.test(spanSize)) {
    return spanSize;
  }
  // Test fractions
  if (/^[0-9]+?\/[0-9]+$/.test(spanSize)) {
    var sizeSplit = spanSize.split('/');
    return parseFloat(sizeSplit[0]) / parseFloat(sizeSplit[1]) * 100 + '%';
  }
  // Test single number
  if (/^[0-9]+$/.test(spanSize)) {
    return parseFloat(spanSize) / gridSize * 100 + '%';
  }
  return '0%';
};
//# sourceMappingURL=utils.js.map
