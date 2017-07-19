// include the Themeparks library
var Themeparks = require("themeparks");

// access a specific park
var disneylandMK = new Themeparks.Parks.DisneylandResortMagicKingdom();

// access wait times by Promise
disneylandMK.GetWaitTimes().then(function(rides) {
    // for (var i = 0; i < 10; i++) {
    //   var ride = rides[i]
    //     // print each wait time
    //     console.log(i + ride.name + ": " + ride.waitTime + " minutes wait");
    // }
    console.log(rides[0])
}, console.error);
