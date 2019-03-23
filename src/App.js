import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import localstorage from 'store2';
import logo from './logo.svg';
import Register from './views/Register';
import Login from './views/Login';
import Loading from './common/components/Loading';

import { verifyToken, logout } from './redux/actions';

class App extends Component {
  static propTypes = {
    user: PropTypes.instanceOf(Map),
    loading: PropTypes.bool.isRequired,
    verifyToken: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { user, verifyToken } = this.props;
    if (!user) {
      const token = localstorage.get('token');
      if (token) {
        verifyToken(token).then(action => {
          if (action.response.ok) {
            this.setState({ view: 'success' });
          }
        });
      }
    }
  }

  logout = () => {
    this.props.logout();
    this.setState({ view: 'login' });
  };

  render() {
    return <div className="app">Bandersnatch</div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    loading: state.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verifyToken: token => dispatch(verifyToken(token)),
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
