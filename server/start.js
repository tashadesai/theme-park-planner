const server = require('./index.js');
const db = require('../db');

db.sync()  // sync our database
.then(() => console.log('db synced'))
.then(() => server) // then start our express server
