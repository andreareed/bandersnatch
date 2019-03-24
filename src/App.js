import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import localstorage from 'store2';
import { Switch, Route, withRouter } from 'react-router-dom';

import Register from './views/Register';
import Login from './views/Login';
import LoggedOutLayout from './layouts/LoggedOutLayout';

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
    const { user } = this.props;

    if (!user) {
      return (
        <LoggedOutLayout className="app">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </LoggedOutLayout>
      );
    }
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
