'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');

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

/*
Attraction.belongsTo(Park)
Park.hasMany(Attraction)
*/
module.exports = Attraction;
