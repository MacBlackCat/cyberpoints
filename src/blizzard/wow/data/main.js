'use strict';

const Class = require('./class/main');
const ConnectedRealm = require('./connectedrealm/main');
const Keystone = require('./keystone/main');
const Realm = require('./realm/main');
const Region = require('./region/main');
const Specialization = require('./specialization/main');

const { getRoot } = require('../../lib/util/Constants');
const { Endpoints } = require('../lib/endpoints/data/Endpoints');

class Data {
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
    this._options = options;
    this.class = new Class(this._options);
    this.connectedRealm = new ConnectedRealm(this._options);
    this.keystone = new Keystone(this._options);
    this.realm = new Realm(this._options);
    this.region = new Region(this._options);
    this.specialization = new Specialization(this._options);
  }

  // MYTHIC CHALLENGE MODE API

  /**
   * Get current period information about the Mythic Challenge Mode relevant
   * to Mythic Keystone Leaderboards
   *
   * @param {String} [token] This parameter will optional if you're was declare in config file.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .challenge('CLIENT_TOKEN', 'kr', 'en_GB');
   * // or
   * .challenge('CLIENT_TOKEN')
   * // or
   * .challenge();
   * @returns {?String} API link for send an request
   */

  challenge(token = this._options.token, region = this._options.region, locale = this._options.locale) {
    if (!token || typeof token !== 'string') return undefined;
    const molten = { region, locale, token: this._options.token };
    let core = getRoot(molten);
    return Endpoints.Data(core).MythicChallenge();
  }

  // WOW TOKEN API

  /**
   * Get the WoW Token index
   *
   * @param {String} [token] This parameter will optional if you're was declare in config file.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .token('CLIENT_TOKEN', 'kr', 'en_GB');
   * // or
   * .token('CLIENT_TOKEN');
   * // or
   * .token();
   * @returns {?String} API link for send an request
   */

  token(token = this._options.token, region = this._options.region, locale = this._options.locale) {
    if (!token || typeof token !== 'string') return undefined;
    const molten = { region, locale, token: this._options.token };
    let core = getRoot(molten);
    return Endpoints.Data(core).Token();
  }
}

module.exports = Data;
