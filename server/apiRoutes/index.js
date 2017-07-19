const router = require('express').Router();

router.use('/wait-times', require('./wait-times')); // matches all requests to /api/users/
router.use('/location', require('./location'));
// router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/
// router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
