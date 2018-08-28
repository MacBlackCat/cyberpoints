'use strict';

const Credentails = require('./credentails/main');
const Diablo = require('./diablo/main');
const Outh2 = require('./outh2/main');
const Sc2 = require('./sc2/main');
const Warcraft = require('./wow/main');
const { Token } = require('./lib/util/Constants');

class Blizzard {
  constructor(options) {
    /**
     * All options for this client
     * @type {Object}
     * @property {String} key Client Key.
     * @property {String} secret The Client Secret.
     * @property {String} [token] Access Token of the Client.
     * @property {String} [region=eu] The region.
     * @property {String} [locale=en_GB] What locale to use in the response.
     * @example
     * {
     * // Required
     * key: 'CLIENT_KEY',
     * // Required
     * secret: 'CLIENT_SECRET'
     * // Optional
     * token: 'ACCESS_TOKEN'
     * // Optional, default 'eu'
     * region: 'us',
     * // Optional, default 'en_GB'
     * locale: 'en_US',
     * }
     * @private
     */
    this._options = Token._validate(options);
    this.credentails = new Credentails(options);
    this.diablo = new Diablo(options);
    this.outh2 = new Outh2(options);
    this.sc2 = new Sc2(options);
    this.warcraft = new Warcraft(options);
  }
}

module.exports = Blizzard;
