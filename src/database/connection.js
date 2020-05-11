const env = process.env.ENV || 'development';
const knex = require('knex');
const knexConfig = require('../../knexfile');

const connection = knex(knexConfig[env]);

module.exports = connection;