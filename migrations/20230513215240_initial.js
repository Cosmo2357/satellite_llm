/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('users', function (table) {
  table.increments('id').primary();
  table.string('name');
  table.string('email').unique();
  table.string('password');
  table.dateTime('createdAt').defaultTo(knex.fn.now());
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable("users")
};
