const server = require('./index.js');
const db = require('../db');

db.sync({ force: false })  // sync our database
.then(() => require(server)) // then start our express server
