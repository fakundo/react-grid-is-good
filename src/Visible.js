import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Visible extends Component {

  static propTypes = {
    className: PropTypes.any,
    children: PropTypes.any,
    breakpoint: PropTypes.string
  };

  render() {
    const { className, children, breakpoint } = this.props;

    if (this.props[breakpoint]) {
      return (
        <div className={className}>
          { children }
        </div>
      );
    }

    return null;
  }

}
