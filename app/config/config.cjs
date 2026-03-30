require('dotenv').config();

const postgresConfig = {
  dialect: 'postgres',
  database: process.env.DATABASE_NAME || 'postgres',
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  port: process.env.DATABASE_PORT || 5432,
  host: process.env.DATABASE_HOST || 'db',
};

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
  },
  test: postgresConfig,
  production: postgresConfig,
};
