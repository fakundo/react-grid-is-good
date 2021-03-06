import capitalize from 'lodash/capitalize';
import reduce from 'lodash/reduce';
import assign from 'lodash/assign';

export const getPropValue = (name, breakpoint, props = {}) => {
  return props[`${name}${capitalize(breakpoint)}`] || props[name];
};

export const applyPrefixes = (propName, propValue) => {
  return reduce(['Webkit', 'Moz', 'Ms'], (acc, prefix) =>
    assign(acc, {
      [prefix + propName]: propValue
    })
  , {});
};


export const calcSize = (spanSize, gridSize) => {
  // Test percents
  if (/^[0-9]{1,3}%$/.test(spanSize)) {
    return spanSize;
  }
  // Test fractions
  if (/^[0-9]+?\/[0-9]+$/.test(spanSize)) {
    const sizeSplit = spanSize.split('/');
    return `${(parseFloat(sizeSplit[0]) / parseFloat(sizeSplit[1])) * 100}%`;
  }
  // Test single number
  if (/^[0-9]+$/.test(spanSize)) {
    return `${(parseFloat(spanSize) / gridSize) * 100}%`;
  }
  return '0%';
};
