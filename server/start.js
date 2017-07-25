const server = require('./index.js');
const db = require('../db');

db.sync({ force: true })  // sync our database
.then(() => server) // then start our express server
