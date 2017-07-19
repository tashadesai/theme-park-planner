// api/location
const router = require('express').Router();

router.get('/current-location', (req, res, next) => {
  //hardcoded lat/long on Main Street in Disneyland in CA
  res.send([33.811590, -117.918973]);
})

module.exports = router;
