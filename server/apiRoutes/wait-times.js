//api/wait-times
const router = require('express').Router();
const Themeparks = require('themeparks');

var disneylandMK = new Themeparks.Parks.DisneylandResortMagicKingdom();

//astro orbiters - DisneylandResortMagicKingdom_353291
router.get('/:rideId', (req, res, next) => {
  disneylandMK.GetWaitTimes()
  .then(allRides => {
    for (var i = 0; i < allRides.length; i++) {
      if (allRides[i].id === req.params.rideId) break;
    }
    res.send(allRides[i].name + " has a " + allRides[i].waitTime + " minute wait.");
  });
});

//get all top rides
//put update top rides
//post list of top rides?
//put current location?

module.exports = router;
