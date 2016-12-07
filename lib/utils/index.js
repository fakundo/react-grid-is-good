var utils = {

  capitalize: function(s) {
    return s[0].toUpperCase() + s.substr(1);
  },

  uniqueId: function(prefix) {
    return prefix + Math.random().toString(16).substr(2, 10);
  },

  inArray: function(array, item) {
    return !!~array.indexOf(item);
  },

  each: function(obj, iteratee) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        iteratee(obj[key], key, obj);
      }
    }
  },

  reduce: function(obj, iteratee, acc) {
    utils.each(obj, function(value, key) {
      return iteratee(acc, value, key, obj);
    });
    return acc;
  },

  mapValues: function(obj, iteratee) {
    return utils.reduce(obj, function(acc, value, key) {
      acc[key] = iteratee(value, key, obj);
      return acc;
    }, {});
  },

  pick: function(obj) {
    var propNames = [].slice.call(arguments, 1);
    return utils.reduce(obj, function(acc, value, key) {
      if (utils.inArray(propNames, key)) {
        acc[key] = value;
      }
      return acc;
    }, {});
  },

  getBreakpointValue: function(value, breakpoint) {
    // Simple value without breakpoints
    if (typeof value !== 'object') {
      return value;
    }
    // Value for given breakpoint only
    if (value[breakpoint]) {
      return value[breakpoint];
    }
    // Value with mupltiple breakpoints
    var breakpointRegexp = new RegExp(breakpoint + '($|,)', 'i');
    for (var key in value) {
      if (value.hasOwnProperty(key) && breakpointRegexp.test(key)) {
        return value[key];
      }
    }
    return undefined;
  },

  getBreakpointValues: function(obj, breakpoint) {
    return utils.mapValues(obj, function(value) {
      return utils.getBreakpointValue(value, breakpoint);
    });
  },

  calcSize: function(spanSize, gridSize) {
    // Test percents
    if (/^[0-9]{1,3}%$/.test(spanSize)) {
      return spanSize;
    }
    // Test fractions
    if (/^[0-9]+?\/[0-9]+$/.test(spanSize)) {
      var sizeSplit = spanSize.split('/');
      return Math.round(parseInt(sizeSplit[0], 10) / parseInt(sizeSplit[1], 10) * 100) + '%';
    }
    // Test single number
    if (/^[0-9]+$/.test(spanSize)) {
      return Math.round(parseInt(spanSize, 10) / gridSize * 100) + '%';
    }
    return '0%';
  },

  applyPrefixes: function(style, propName, propValue) {
    ['Webkit', 'Moz', 'Ms'].forEach(function(prefix) {
      style[prefix + utils.capitalize(propName)] = propValue;
    });
    style[propName] = propValue;
  }

};

module.exports = utils;
