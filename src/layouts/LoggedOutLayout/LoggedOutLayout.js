import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoggedOutLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;
    return <div className={className}>{children}</div>;
  }
}

export default LoggedOutLayout;
