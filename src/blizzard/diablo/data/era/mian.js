'use strict';

const { Endpoints } = require('../../lib/endpoints/data/Endpoints');
const { getRoot } = require('../../../lib/util/Constants');

class Era {
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
  }

  // D3 DATA API - ERA PART

  /**
   * Returns base information about available eras
   *
   * @param {String} [token] This parameter will optional if you're was declare in config file.
   * @param {String} [region=eu] The region.
   * @example
   * .index('eu', 'CLIENT_TOKEN');
   * // or
   * .index('eu');
   * @returns {?String} API link for send an request
   */

  index(token = this._options.token, region = this._options.region) {
    if (!token || typeof token !== 'string') return undefined;
    const tristram = { region, token };
    let nephalem = getRoot(tristram);
    return Endpoints.Data(nephalem).Era.Index();
  }

  /**
   * Returns a leaderboard list for a particular era
   *
   * @param {String|Number} id The era to lookup.
   * @param {String} [token] This parameter will optional if you're was declare in config file.
   * @param {String} [region=eu] The region.
   * @example
   * .get('1', 'CLIENT_TOKEN');
   * // or
   * .get(1);
   * @returns {?String} API link for send an request
   */

  get(id, token = this._options.token, region = this._options.region) {
    if (!id || !token || isNaN(parseInt(id)) || typeof token !== 'string') {
      return undefined;
    }
    const tristram = { region, token };
    let nephalem = getRoot(tristram);
    return Endpoints.Data(nephalem).Era.Era(id);
  }

  /**
   * Returns a leaderboard list for a particular era
   *
   * @param {String|Number} id The era to lookup.
   * @param {String} leaderboard The leaderboard to lookup, you can find these strings in the Era API call
   * @param {String} [token] This parameter will optional if you're was declare in config file.
   * @param {String} [region=eu] The region.
   * @example
   * .get('1', 'rift-barbarian', 'CLIENT_TOKEN', 'us');
   * // or
   * .get(1, 'rift-barbarian');
   * @returns {?String} API link for send an request
   */

  leaderboard(id, leaderboard, token = this._options.token, region = this._options.region) {
    if (
      !id ||
      !leaderboard ||
      !token ||
      isNaN(parseInt(id)) ||
      typeof leaderboard !== 'string' ||
      typeof token !== 'string'
    ) {
      return undefined;
    }
    const tristram = { region, token };
    let nephalem = getRoot(tristram);
    return Endpoints.Data(nephalem).Era.Leaderboard(id, leaderboard);
  }
}

module.exports = Era;
