exports.up = async knex => {
  await knex.schema.createTable('rooms', table => {
    table.uuid('id').primary();
    table.string('area');
    table.text('description');
    table.json('actions');
    table.json('exits');
  });

  await knex.schema.createTable('games', table => {
    table.uuid('id').primary();
    table.uuid('user_id').references('users.id');
    table.uuid('room_id').references('rooms.id');
    table.timestamp('created_at').notNullable();
    table.timestamp('updated_at');
  });
};

exports.down = async knex => {
  await knex.schema.dropTable('rooms');
  await knex.schema.dropTable('games');
};
