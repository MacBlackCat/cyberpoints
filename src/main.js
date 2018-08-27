'use strict';

if (process.version.slice(1).split('.')[0] < 10 && process.version.slice(1).split('.')[1] < 9) {
  throw new Error('Please install Node.JS 10.9.0 or higher version.');
}

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
