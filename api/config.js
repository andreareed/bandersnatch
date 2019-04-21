require('dotenv').config();
const env = process.env.APP_ENV || 'development';
const config = {
  env,
  development: {
    db: {
      connection: process.env.CONNECTION_STRING,
      seedDirectory: './api/database/seeds/dev',
      migrationDirectory: './api/database/migrations',
      debug: process.env.DEBUG,
    },
  },
  production: {
    db: {
      connection: process.env.CONNECTION_STRING,
      seedDirectory: './api/database/seeds/prod',
      migrationDirectory: './api/database/migrations',
      debug: false,
    },
  },
};

module.exports = config;
