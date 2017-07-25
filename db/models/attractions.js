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
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  },
  permalink: { //'haunted-mansion'
    type: Sequelize.STRING
  },
  thrillLevels: { //'Loud, Thrill Rides, Dark, Scary, Small Drops'
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
};

/*
Attraction.belongsTo(Park)
Park.hasMany(Attraction)
*/
module.exports = Attraction;
