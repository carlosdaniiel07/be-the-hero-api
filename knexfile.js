// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'root',
      database : 'omnistack_11_db'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/database/migrations'
    }  
  },
  test: {
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'root',
      database : 'omnistack_11_db_test'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/database/migrations'
    }  
  },
  production: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/database/migrations'
    }  
  },
};
