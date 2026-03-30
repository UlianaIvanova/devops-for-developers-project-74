require('dotenv').config();

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
  },
  production: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
  },
  // Блок с SQLite закомментирован:
  // test: {
  //   dialect: 'sqlite',
  //   storage: './database.test.sqlite',
  // },
  // Блок с Postgres раскомментирован:
  test: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: 5432, // <--- Проверь, чтобы здесь было 5432
    host: process.env.DATABASE_HOST,
  },

};
