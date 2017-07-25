//api/attractions
const router = require('express').Router();
const Themeparks = require('themeparks');

var disneylandMK = new Themeparks.Parks.DisneylandResortMagicKingdom();

//GET all attractions using themeparks api
router.get('/all-attractions', (req, res, next) => {
  console.log(req.query.status)
  disneylandMK.GetWaitTimes()
  .then(allRides => {
    var allRidesArr = [];

    allRides.map(ride => {

      if (req.query.status) {
        if (ride.status.toLowerCase() === req.query.status.toLowerCase()) allRidesArr.push(ride.name)
      } else {
        allRidesArr.push(ride.name);
      }
    });

    return allRidesArr;
  })
  .then(allRidesArr => {
    res.send(allRidesArr);
  });
});

module.exports = router;
