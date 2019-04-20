import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import localstorage from 'store2';
import getDefaultState from '../common/utils/defaultReduxState';

import game from '../views/Game/redux/reducers';

import { REGISTER_USER, LOGIN_USER, VERIFY_TOKEN, LOGOUT_USER } from './actions';

const token = (state = localstorage.get('token'), action) => {
  switch (action.type) {
    case `${VERIFY_TOKEN}_SUCCESS`:
    case `${REGISTER_USER}_SUCCESS`:
    case `${LOGIN_USER}_SUCCESS`:
      localstorage.set('token', action.json.token);
      return action.json.token;
    default:
      return state;
  }
};

const user = (state = getDefaultState(null), action) => {
  switch (action.type) {
    case `${REGISTER_USER}_REQUEST`:
    case `${LOGIN_USER}_REQUEST`:
    case `${VERIFY_TOKEN}_REQUEST`:
      return state.merge({
        loaded: false,
        loading: true,
        error: null,
      });

    case `${REGISTER_USER}_SUCCESS`:
    case `${LOGIN_USER}_SUCCESS`:
    case `${VERIFY_TOKEN}_SUCCESS`:
      return state.merge({
        data: fromJS(action.json),
        loaded: true,
        loading: false,
        error: null,
      });

    case LOGOUT_USER:
      localstorage.clear();
      return getDefaultState(null);

    case `${REGISTER_USER}_FAILURE`:
    case `${LOGIN_USER}_FAILURE`:
    case `${VERIFY_TOKEN}_FAILURE`:
      return state.merge({
        data: null,
        loaded: true,
        loading: false,
        error: action.error,
      });

    default:
      return state;
  }
};

export default combineReducers({
  token,
  user,
  game,
});
