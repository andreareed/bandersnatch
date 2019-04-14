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

  $beforeInsert() {
    this.id = uuid.v4();
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

module.exports = Game;
