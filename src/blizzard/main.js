'use strict';

const Credentails = require('./credentails/main');
const Diablo = require('./diablo/main');
const Outh2 = require('./outh2/main');
const Sc2 = require('./sc2/main');
const Warcraft = require('./wow/main');

class Blizzard {
  constructor(options) {
    this.credentails = new Credentails(options);
    this.diablo = new Diablo(options);
    this.outh2 = new Outh2(options);
    this.sc2 = new Sc2(options);
    this.warcraft = new Warcraft(options);
  }
}

module.exports = Blizzard;
