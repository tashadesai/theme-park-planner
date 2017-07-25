const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgress://localhost:1337/themeparks-helper', {
  logging: false
});

module.exports = db;
