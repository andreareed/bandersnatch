import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class LoggedInLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;
    return (
      <div className={classNames(['loggedInLayout', className])}>
        {/* <h1 className="loggedInLayout__header">Bandersnatch</h1> */}
        {children}
      </div>
    );
  }
}

export default LoggedInLayout;
