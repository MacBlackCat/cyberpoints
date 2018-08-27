const {
  Blizzard: { Wow }
} = require('../src/main');
const config = require('./config-test');
const wow = new Wow(config);

// eslint-disable-next-line
console.log(wow.community.character.profile())
