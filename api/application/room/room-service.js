const Boom = require('boom');
const Game = require('./Game');

module.exports = {
  async postGame(user_id) {
    return Game.query().insertAndFetch({ user_id });
  },

  async getGames(user_id) {
    return Game.query().where({ user_id });
  },
};
