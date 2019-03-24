import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import localstorage from 'store2';

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

const user = (state = null, action) => {
  switch (action.type) {
    case `${REGISTER_USER}_SUCCESS`:
      return fromJS(action.json);

    case `${LOGIN_USER}_SUCCESS`:
      return fromJS(action.json);

    case `${VERIFY_TOKEN}_SUCCESS`:
      return fromJS(action.json);

    case LOGOUT_USER:
      localstorage.clear();
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  token,
  user,
});
