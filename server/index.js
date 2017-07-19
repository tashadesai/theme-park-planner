const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./apiRoutes'));
// matches all requests to /api

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.statk);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

app.listen(1337, function() {
  console.log("Server listening on port 1337");
});

module.exports = app;
/*

// apiRoutes/puppies.js
const router = require('express').Router();

// matches GET requests to /api/puppies/
router.get('/', function (req, res, next) {  etc });
// matches POST requests to /api/puppies/
router.post('/', function (req, res, next) { etc });
// matches PUT requests to /api/puppies/:puppyId
router.put('/:puppyId', function (req, res, next) {  etc });
// matches DELTE requests to /api/puppies/:puppyId
router.delete('/:puppyId', function (req, res, next) {  etc });

module.exports = router;
*/
