exports.up = async knex => {
  await knex.schema.createTable('games', table => {
    table.uuid('id').primary();
    table.uuid('user_id').references('users.id');
    table.timestamp('created_at').notNullable();
    table.timestamp('updated_at');
  });
};

exports.down = async knex => {
  await knex.schema.dropTable('games');
};
