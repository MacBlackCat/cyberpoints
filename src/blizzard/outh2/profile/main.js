'use strict';

const { Endpoints } = require('./../lib/endpoints/community/Endpoints');
const { getRoot } = require('../../lib/util/Constants');

class Profile {
  constructor(options) {
    /**
     * All options for this client
     *
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
    this.profile = new Profile(this._options);
  }

  // PROFILE API

  /**
   * This provides data about the current logged in OAuth user's Sc2 profile.
   *
   * @param {String} [token] This parameter will optional if you're was declare in config file.
   * @param {String} [region=eu] The region.
   * @example
   * .sc2('CLIENT_TOKEN', 'eu');
   * // or
   * .sc2();
   * @returns {?String} API link for send an request
   */

  sc2(token = this._options.token, region = this._options.region) {
    if (!token || typeof token !== 'string') return undefined;
    const blizz = { region, token };
    let conn = getRoot(blizz);
    return Endpoints.Community(conn).Profile.SC2();
  }

  /**
   * This provides data about the current logged in OAuth user's WoW profile.
   *
   * @param {String} [token] This parameter will optional if you're was declare in config file.
   * @param {String} [region=eu] The region.
   * @example
   * .wow('CLIENT_TOKEN', 'eu');
   * // or
   * .wow();
   * @returns {?String} API link for send an request
   */

  wow(token = this._options.token, region = this._options.region) {
    if (!token || typeof token !== 'string') return undefined;
    const blizz = { region, token };
    let conn = getRoot(blizz);
    return Endpoints.Community(conn).Profile.WOW();
  }
}

module.exports = Profile;
