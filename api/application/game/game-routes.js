const Joi = require('joi');

const controller = require('./game-controller');

module.exports = {
  name: 'Game Routes',
  register: async (server, options) => {
    server.route([
      {
        method: 'POST',
        path: '/games',
        handler: controller.postGameHandler,
        config: {
          auth: {
            strategies: ['jwt'],
          },
        },
      },
      {
        method: 'GET',
        path: '/games',
        handler: controller.getGamesHandler,
        config: {
          auth: {
            strategies: ['jwt'],
          },
        },
      },
    ]);
  },
};
