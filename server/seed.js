var Promise = require('bluebird');
var db = require('../db');

var data = {
    attraction: [
        {
          name: "Andaz Wall Street",
          themeparksApiId: ,
          ages: 4,
          permalink: "Pool, Free Wi-Fi",
          thrillLevels:
        },
        {name: "Hotel Mulberry",
            place: {
                address: "52 Mulberry St",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.715317, -73.999542]
            },
            num_stars: 4.5,
            amenities: "Free Wi-Fi"
        },
        {name: "The Ritz-Carlton New York, Battery Park",
            place: {
                address: "Two West Street",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.705417, -74.017241]
            },
            num_stars: 4.5,
            amenities: "24 hour Gym, Paid Wi-Fi"
        },
        {name: "Wall Street Inn",
            place: {
                address: "9 S William St",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.704581, -74.010273]
            },
            num_stars: 4,
            amenities: "Free Wi-Fi"
        },
        {name: "Smyth TriBeCa",
            place: {
                address: "85 West Broadway",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.715076, -74.009301]
            },
            num_stars: 3.5,
            amenities: "24 hour Gym"
        },
        {name: "Double Tree",
            place: {
                address: "8 Stone St",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.703961, -74.012350]
            },
            num_stars: 3.5,
            amenities: "24 hour Gym"
        },
        {name: "Hotel 91",
            place: {
                address: "91 E Broadway",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.713427, -73.993624]
            },
            num_stars: 3.5,
            amenities: "Free Wi-Fi"
        },
        {name: "Conrad New York Hotel",
            place: {
                address: "102 N End Ave",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.714985, -74.015841]
            },
            num_stars: 3.5,
            amenities: "Paid Wi-Fi, Dogs Allowed"
        },
        {name: "Millenium Hilton Hotel",
            place: {
                address: "55 Church St",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.711597, -74.010392]
            },
            num_stars: 3.5,
            amenities: "Paid Wi-Fi"
        },
        {name: "US Pacific Hotel",
            place: {
                address: "106 Bowery",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.717873, -73.995231]
            },
            num_stars: 2,
            amenities: "Accepts Credit Cards"
        },
        {name: "Gild Hall, a Thompson Hotel",
            place: {
                address: "15 Gold Street",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.707894, -74.007108]
            },
            num_stars: 4,
            amenities: "Paid Wi-Fi"
        },
        {name: "W New York",
            place: {
                address: "123 Washington Street",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.709102, -74.013997]
            },
            num_stars: 3.5,
            amenities: "Pool, 24 hour Gym, Paid Wi-Fi"
        },
        {name: "New York Marriott Downtown",
            place: {
                address: "85 W St at Albany St",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.731131, -73.989568]
            },
            num_stars: 3.5,
            amenities: "24 hour Gym, Paid Wi-Fi"
        },
        {name: "Cosmopolitan Hotel",
            place: {
                address: "95 W Broadway",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.715681, -74.008922]
            },
            num_stars: 3.5,
            amenities: "Free Wif-Fi"
        },
        {name: "Club Quarters",
            place: {
                address: "140 Washington St",
                city: "New York",
                state: "NY",
                phone: "123-456-7890",
                location: [40.709630, -74.013940]
            },
            num_stars: 4,
            amenities: "Free Wif-Fi"
        }
    ]
};

db.sync({force: true})
    .then(function () {
        console.log("Dropped old data, now inserting data");
        return Promise.map(Object.keys(data), function (name) {
            return Promise.map(data[name], function (item) {
                return db.model(name)
                    .create(item, {
                        include: [Place]
                    });
            });
        });
    })
    .then(function () {
      return Day.create({number: 1});
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
