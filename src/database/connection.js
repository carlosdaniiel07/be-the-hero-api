const env = process.env.ENV || 'development';
const knexConfig = require('../../knexfile');
const knex = require('knex')

const connection = knex(knexConfig[env]);

module.exports = connection;