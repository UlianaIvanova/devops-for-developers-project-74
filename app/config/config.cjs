module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
  },
  test: {
    dialect: 'sqlite',        
    storage: './database.test.sqlite',
  },
  production: {
    dialect: 'postgres',      
    host: process.env.DATABASE_HOST || 'db',
  },
};