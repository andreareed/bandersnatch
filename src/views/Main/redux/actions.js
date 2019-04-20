import client from '../../../client';

export const START_NEW_GAME = 'START_NEW_GAME';
export const GET_GAMES = 'GET_GAMES';
export const LOAD_GAME = 'LOAD_GAME';

export const getGameSaves = () => ({
  type: GET_GAMES,
  promise: client.get('/games'),
});

export const startNewGame = () => ({
  type: START_NEW_GAME,
  promise: client.post('/games'),
});

export const loadGame = gameId => ({
  type: LOAD_GAME,
  promise: client.get(`/games/${gameId}`),
});
