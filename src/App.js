import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Loading from './common/components/Loading';
import Register from './views/Register';
import Login from './views/Login';
import Main from './views/Main';
import LoggedOutLayout from './layouts/LoggedOutLayout';
import LoggedInLayout from './layouts/LoggedInLayout';

import { verifyToken, logout } from './redux/actions';

class App extends Component {
  static propTypes = {
    user: PropTypes.instanceOf(Map),
    token: PropTypes.string,
    verifyToken: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { user, token, verifyToken } = this.props;
    if (!user.get('data') && token) {
      verifyToken(token);
    }
  }

  componentDidUpdate(prevProps) {
    const { verifyToken, token } = this.props;
    if (token && prevProps.token !== token) {
      verifyToken(token);
    }
  }

  logout = () => {
    this.props.logout();
  };

  render() {
    const { user, token } = this.props;

    if (token && user.get('loading')) {
      return <Loading />;
    }

    if (!user.get('data')) {
      return (
        <LoggedOutLayout>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </LoggedOutLayout>
      );
    }
    return (
      <LoggedInLayout>
        <Switch>
          <Route path="/" component={Main} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </LoggedInLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token,
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
