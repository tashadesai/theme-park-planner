// include the Themeparks library
var Themeparks = require("themeparks");

// access a specific park
// var disneyMagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
var disneylandMK = new Themeparks.Parks.DisneylandResortMagicKingdom();


// access wait times by Promise
disneylandMK.GetWaitTimes().then(function(rides) {
    // print each wait time
    for(var i=0; i < rides.length; i++) {
      var ride = rides[i]
        // console.log(i + ride.name + ": " + ride.waitTime + " minutes wait");
        if (ride.status === 'Operating') console.log(i, ride);

    }
}, console.error);
