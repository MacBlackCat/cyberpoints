'use strict';

const { getRoot } = require('../../../lib/util/Constants');
const { Endpoints } = require('../../lib/endpoints/community/Endpoints');

class Challenge {
  constructor(options) {
    /**
     * All options for this client
     * @type {Object}
     * @property {String} key The Client Key.
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
  }

  // CHALLENGE MODE API

  /**
   * The data in this request has data for all 9 challenge mode maps (currently).
   * The map field includes the current medal times for each dungeon.
   * Inside each ladder we provide data about each character that was part of each run.
   * The character data includes the current cached spec of the character
   * while the member field includes the spec of the character during the challenge mode run.
   *
   * @param {String} realmName The realm being requested.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * // If you want pass any optional parameter just type 'undefined'
   * .community.challenge.realm('silvermoon', undefined, 'en_US');
   * @return {?String} API link for send an request
   */

  realm(realmName, region = this._options.region, locale = this._options.locale) {
    if (!realmName || typeof realmName !== 'string') return undefined;
    const molten = { region, locale, key: this._options.key };
    let core = getRoot(molten);
    return Endpoints.Community(core).Challenge.RealmLeaderBoard(realmName.toLowerCase());
  }

  /**
   * The region leaderboard has the exact same data format as the realm leaderboards
   * except there is no realm field. It is simply the top 100 results gathered
   * for each map for all of the available realm leaderboards in a region.
   *
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * // If you want pass any optional parameter just type 'undefined'
   * .community.challenge.region(undefined, 'en_US');
   * @return {?String} API link for send an request
   */

  region(region = this._options.region, locale = this._options.locale) {
    const molten = { region, locale, key: this._options.key };
    let core = getRoot(molten);
    return Endpoints.Community(core).Challenge.RegionLeaderBorad();
  }
}

module.exports = Challenge;
