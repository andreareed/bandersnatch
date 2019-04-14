import client from '../../../client';

const START_NEW_GAME = 'START_NEW_GAME';

export const startNewGame = () => ({
  type: START_NEW_GAME,
  promise: client.post('/users/games'),
});
