const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

const service = require('./game-service');
const saltRounds = 12;

module.exports = {
  async postGameHandler(request) {
    const { auth, payload } = request;
    return service.postGame(auth.credentials.id, payload.room_id);
  },

  async getGamesHandler(request) {
    const { id } = request.auth.credentials;
    return service.getGames(id);
  },

  async loadGameHandler(request) {
    return request.params.game;
  },
};
