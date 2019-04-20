const Knex = require('knex');
const uuid = require('uuid');
const connection = require('../../knexfile');
const { Model } = require('objection');
const knexConnection = Knex(connection);

Model.knex(knexConnection);

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get notFoundMessage() {
    return 'Invalid user';
  }

  static get relationMappings() {
    return {
      games: {
        relation: Model.HasManyRelation,
        modelClass: require('../game/Game'),
        join: {
          from: 'users.id',
          to: 'games.user_id',
        },
      },
    };
  }

  $beforeInsert() {
    this.id = uuid.v4();
    this.created_at = new Date().toISOString();
  }
}

module.exports = User;
