'use strict';

module.exports = {
  // mains
  Blizzard: {
    All: require('./blizzard/main'),
    Wow: require('./blizzard/wow/main'),
    Diablo: require('./blizzard/diablo/main'),
    Sc2: require('./blizzard/sc2/main'),
    Outh2: require('./blizzard/outh2/main')
  },
  Riot: require('./riot/lol/main'),
  // utility
  version: require('../package.json').version
};
