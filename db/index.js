const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgress://localhost:5432/yourdbname', {
  logging: false
});

module.exports = db;
