const Knex = require('knex');
const uuid = require('uuid');
const connection = require('../../knexfile');
const { Model } = require('objection');
const knexConnection = Knex(connection);

Model.knex(knexConnection);

class Game extends Model {
  static get tableName() {
    return 'games';
  }

  static get notFoundMessage() {
    return 'Invalid game save';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: require('../user/User'),
        join: {
          from: 'games.user_id',
          to: 'users.id',
        },
      },
    };
  }

  $beforeInsert() {
    this.id = uuid.v4();
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

module.exports = Game;
