const Boom = require('boom');
const User = require('./User');
const Game = require('./Game');

module.exports = {
  async findById(id) {
    return User.query().findById(id);
  },

  async findByEmail(email) {
    return User.query().findOne({ email: email.toLowerCase() });
  },

  async registerUser(data) {
    return User.query()
      .insertAndFetch(data)
      .catch(err => {
        if (err.constraint) {
          throw Boom.badData('Email already exists');
        } else {
          throw Boom.badData('Opps! Something went wrong.');
        }
      });
  },

  async postGame(user_id) {
    return Game.query().insertAndFetch({ user_id });
  },
};
