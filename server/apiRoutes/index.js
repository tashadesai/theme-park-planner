const router = require('express').Router();

router.use('/wait-times', require('./wait-times')); // matches all requests to /api/wait-times/
router.use('/location', require('./location'));
router.use('/attractions', require('./attractions'));

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
