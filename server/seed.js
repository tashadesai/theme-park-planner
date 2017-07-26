var Promise = require('bluebird');
var db = require('../db');
var Themeparks = require("themeparks");
var disneylandMK = new Themeparks.Parks.DisneylandResortMagicKingdom();
var touringplans = 'https://touringplans.com/disneyland';
var axios = require('axios');

//

var attraction = [];

disneylandMK.GetWaitTimes()
.then(function(rides) {
    for (var i=0; i < rides.length; i++) {
      var ride = rides[i]
      attraction.push({
        name: ride.name,
        themeparksApiId: ride.id,
      });
    }
}, console.error)
.then(() => {
  axios.get(touringplans + '/attractions.json')
  .then(res => {
    res.data.map(touringplansRide => {
      attraction.forEach((themeparksAPIride, i) => {
        if (touringplansRide.name === themeparksAPIride.name) {
          attraction[i].permalink = touringplansRide.permalink;

          axios.get(touringplans + '/attractions/' + touringplansRide.permalink + '.json')
          .then(singleRideRes => {
            attraction[i].duration = singleRideRes.data.duration;
          })
        }
      })
    })
  })
})
.then(() => {
  console.log("OH HEY", attraction)
  var data = {attraction};

  db.sync({force: true})
  .then(function () {
    console.log("Dropped old data, now inserting data");
    return Promise.map(Object.keys(data), function (name) {
      return Promise.map(data[name], function (item) {
        return db.model(name)
          .create(item);
        });
    });
  })
  .then(function () {
    console.log("Finished inserting data");
  })
  .catch(function (err) {
    console.error('There was totally a problem', err, err.stack);
  })
    .finally(function () {
      db.close() // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
      console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
      return null; // silences bluebird warning about using non-returned promises inside of handlers.
    });
});

/*
SAMPLE DATA FROM THEMEPARKS API:

{ id: 'DisneylandResortMagicKingdom_353291',
  name: 'Astro Orbitor',
  active: true,
  waitTime: 40,
  fastPass: false,
  lastUpdate: 1501015846734,
  status: 'Operating',
  schedule:
   { date: '2017-07-25',
     openingTime: '2017-07-25T11:00:00-04:00',
     closingTime: '2017-07-26T03:00:00-04:00',
     type: 'Operating' } }


MODEL:

var Attraction = {
  name: {
    type: Sequelize.STRING, //'Haunted Mansion'
    allowNull: false
  },
  themeparksApiId: {//'DisneyMagicKingdom_123332322'
    type: Sequelize.STRING
  },
  ages: { //['kids', 'little kids', etc]
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  permalink: { //'haunted-mansion'
    type: Sequelize.STRING
  },
  thrillLevels: { //'Loud, Thrill Rides, Dark, Scary, Small Drops'
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.DOUBLE) //[latitide, longitude] but mapbox expects [long, lat]
  },
  duration: {
    type: Sequelize.DOUBLE
  }
};
*/


