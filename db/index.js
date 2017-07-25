const Sequelize = require('sequelize');
const Attraction = require('./models/attractions.js')

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/themeparks-helper', {
  // logging: console.log
});

db.define('attraction', Attraction);

module.exports = db;
