exports.seed = function(knex, Promise) {
  return knex('table_name')
    .del()
    .then(function() {
      return knex('table_name').insert([
        {
          id: 'cd345fe8-6f65-4684-93f5-af1ad142157e',
          description: 'You are sitting at your desk.',
          actions: '',
          movement: '',
        },
      ]);
    });
};
