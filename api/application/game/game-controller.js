const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const service = require('./game-service');
const saltRounds = 12;

module.exports = {
  async postGameHandler(request) {
    const { id } = request.auth.credentials;
    return service.postGame(id);
  },

  async getGamesHandler(request) {
    const { id } = request.auth.credentials;
    return service.getGames(id);
  },
};
