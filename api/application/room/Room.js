const Knex = require('knex');
const uuid = require('uuid');
const connection = require('../../../knexfile');
const { Model } = require('objection');
const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Room extends Model {
  static get tableName() {
    return 'rooms';
  }

  static get notFoundMessage() {
    return 'Invalid room';
  }

  static get relationMappings() {
    return {
      game: {
        relation: Model.HasManyRelation,
        modelClass: require('../game/Game'),
        join: {
          from: 'games.room_id',
          to: 'rooms.id',
        },
      },
    };
  }
}

module.exports = Room;
