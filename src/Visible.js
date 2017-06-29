import { Component, Children } from 'react';
import PropTypes from 'prop-types';

export default class Visible extends Component {

  static propTypes = {
    children: PropTypes.any,
    breakpoint: PropTypes.string
  };

  render() {
    const { children, breakpoint } = this.props;

    if (this.props[breakpoint]) {
      return (Children.only(children));
    }

    return null;
  }

}
