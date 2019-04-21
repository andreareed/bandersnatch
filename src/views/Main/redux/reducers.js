import { combineReducers } from 'redux';
import { fromJS, List, Map } from 'immutable';
import localstorage from 'store2';
import getDefaultState from '../../../common/utils/defaultReduxState';

import { GET_GAMES, START_NEW_GAME, LOAD_GAME } from './actions';

const gameSaves = (state = getDefaultState(List()), action) => {
  switch (action.type) {
    case `${START_NEW_GAME}_REQUEST`:
    case `${GET_GAMES}_REQUEST`:
      return state.merge({
        loaded: false,
        loading: true,
        error: null,
      });

    case `${GET_GAMES}_SUCCESS`:
      return state.merge({
        data: fromJS(action.json),
        loaded: true,
        loading: false,
        error: null,
      });

    case `${START_NEW_GAME}_SUCCESS`:
      return state.merge({
        data: state.set('data', state.get('data').push(fromJS(action.json))),
        loaded: true,
        loading: false,
        error: null,
      });

    case `${START_NEW_GAME}_FAILURE`:
    case `${GET_GAMES}_FAILURE`:
      return state.merge({
        data: List(),
        loaded: true,
        loading: false,
        error: action.error,
      });

    default:
      return state;
  }
};

const currentGame = (state = getDefaultState(Map()), action) => {
  switch (action.type) {
    case `${START_NEW_GAME}_REQUEST`:
    case `${LOAD_GAME}_REQUEST`:
      return state.merge({
        loaded: false,
        loading: true,
        error: null,
      });

    case `${START_NEW_GAME}_SUCCESS`:
    case `${LOAD_GAME}_SUCCESS`:
      localstorage.set('gameId', action.json.id);
      return state.merge({
        data: fromJS(action.json),
        loaded: true,
        loading: false,
        error: null,
      });

    case `${START_NEW_GAME}_FAILURE`:
    case `${LOAD_GAME}_FAILURE`:
      return state.merge({
        data: Map(),
        loaded: true,
        loading: false,
        error: action.error,
      });

    default:
      return state;
  }
};

export default combineReducers({
  gameSaves,
  currentGame,
});
