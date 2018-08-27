'use strict';

const Data = require('./data/main');
const Profile = require('./profile/main');
const { getRoot } = require('../../lib/util/Constants');
const { Endpoints } = require('../lib/endpoints/community/Endpoints');

class Community {
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
    this.data = new Data(this._options);
    this.profile = new Profile(this._options);
  }

  // LADDER API

  /**
   * This provides data about an SC2 ladder.
   *
   * @param {String|Number} id The ID of the ladder to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .ledder('655', 'us', 'en_US');
   * // or
   * .ledder(655);
   * @returns {?String} API link for send an request
   */

  ledder(id, region = this._options.region, locale = this._options.locale) {
    if (!id || isNaN(parseInt(id))) return undefined;
    const tristram = { region, locale, key: this._options.key };
    let nephalem = getRoot(tristram);
    return Endpoints.Community(nephalem).Ledder(id);
  }
}

module.exports = Community;
