const Joi = require('joi');
const {
  asyncValidation,
  objection: { rowExists, rowExistsWhere },
} = require('@synapsestudios/hapi-async-validation');

const controller = require('./game-controller');
const Game = require('./Game');

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
      {
        method: 'GET',
        path: '/games/{game}',
        handler: controller.loadGameHandler,
        config: {
          auth: {
            strategies: ['jwt'],
            scope: ['game-{params.game}'],
          },
          validate: {
            params: asyncValidation(
              {
                game: Joi.string()
                  .uuid()
                  .required(),
              },
              {
                game: rowExists(Game, 'id', Game.notFoundMessage),
              }
            ),
            query: {
              preview: Joi.boolean().optional(),
            },
          },
        },
      },
    ]);
  },
};
