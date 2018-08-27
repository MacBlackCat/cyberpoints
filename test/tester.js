const {
  Blizzard: { Outh2 }
} = require('../src/main');
const config = require('./config-test');
const outh2 = new Outh2(config);

console.log(outh2.user()); // eslint-disable-line no-console
