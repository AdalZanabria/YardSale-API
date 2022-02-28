const { config } = require('../config/config');

const dbType = 'postgres'; //postgres o mysql
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `${dbType}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: dbType,
  },
  production: {
    url: URI,
    dialect: dbType,
  },
};
