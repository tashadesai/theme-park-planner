// api/location
const router = require('express').Router();

router.get('/current-location', (req, res, next) => {
  //hardcoded lat/long on Main Street in Disneyland in CA [33.811590, -117.918973]
  var hardcodedCurrent = [33.811590, -117.918973];

  //Mapbox accepts long/lat not lat/long
  var lat = hardcodedCurrent[0];
  var lng = hardcodedCurrent[1];

  hardcodedCurrent[0] = lng;
  hardcodedCurrent[1] = lat;

  res.send(hardcodedCurrent);
})

module.exports = router;
