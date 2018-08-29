'use strict';

const Era = require('./era/mian');
const Season = require('./season/main');

class Data {
  constructor(options) {
    this.era = new Era(options);
    this.season = new Season(options);
  }
}

module.exports = Data;
