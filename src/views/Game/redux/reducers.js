import { combineReducers } from 'redux';
import { fromJS, List, Map } from 'immutable';
import localstorage from 'store2';

import { GET_GAMES, START_NEW_GAME, LOAD_GAME } from './actions';

const gameSaves = (state = List(), action) => {
  switch (action.type) {
    case `${GET_GAMES}_SUCCESS`:
      return fromJS(action.json);

    case `${START_NEW_GAME}_SUCCESS`:
      return state.push(fromJS(action.json));

    default:
      return state;
  }
};

const currentGame = (state = Map(), action) => {
  switch (action.type) {
    case `${START_NEW_GAME}_SUCCESS`:
    case `${LOAD_GAME}_SUCCESS`:
      localstorage.set('gameId', action.json.id);
      return fromJS(action.json);

    default:
      return state;
  }
};

export default combineReducers({
  gameSaves,
  currentGame,
});
