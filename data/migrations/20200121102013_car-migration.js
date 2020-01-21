// vin, make, model, mileage, transmission, title
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.integer('VIN').unique().notNullable();
      tbl.text('make').notNullable();
      tbl.text('model').notNullable();
      tbl.integer('mileage').notNullable();
      tbl.boolean('automatic').nullable();
      tbl.text('title').nullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
