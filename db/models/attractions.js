'use strict';
var Sequelize = require('sequelize');
var db = require('../db');

var Attraction = db.define('attraction', {
  name: {
    type: Sequelize.STRING, //'Haunted Mansion'
    allowNull: false
  },
  themeparks_id: {//'DisneyMagicKingdom_123332322'
    type: Sequelize.STRING
  },
  ages: { //['kids', 'little kids', etc]
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  permalink: { //'haunted-mansion'
    type: Sequelize.STRING,
    defaultValue: []
  },
  thrill_level: { //'Loud, Thrill Rides, Dark, Scary, Small Drops'
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
});

/*
Attraction.belongsTo(Park)
Park.hasMany(Attraction)
*/
module.exports = Attraction;
