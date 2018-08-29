'use strict';

const { Endpoints } = require('../../lib/endpoints/data/Endpoints');

class Season {
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

  // D3 DATA API - SEASON PART

  /**
   * Returns base information about available seasons
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.token] This parameter will optional if you're was declare in config file.
   * @param {String} [args.region=eu] The region.
   * @example
   * .index({ token: 'CLIENT_TOKEN', region: 'us' });
   * // or
   * .index();
   * @returns {?String} API link for send an request
   */

  index({ token = this._options.token, region = this._options.region } = {}) {
    if (!token || typeof token !== 'string') return undefined;
    let nephalem = this._options.getRoot({ region, token });
    return Endpoints.Data(nephalem).Season.Index();
  }

  /**
   * Returns a leaderboard list for a particular season
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.id The season to lookup.
   * @param {String} [args.token] This parameter will optional if you're was declare in config file.
   * @param {String} [args.region=eu] The region.
   * @example
   * .get({ id: '1', token: 'CLIENT_TOKEN', region: 'us' });
   * // or
   * .get({ id: 1 });
   * @returns {?String} API link for send an request
   */

  get({ id, token = this._options.token, region = this._options.region } = {}) {
    if (!id || !token || isNaN(parseInt(id)) || typeof token !== 'string') {
      return undefined;
    }
    let nephalem = this._options.getRoot({ region, token });
    return Endpoints.Data(nephalem).Season.Season(id);
  }

  /**
   * Returns a leaderboard
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.id The season to lookup.
   * @param {String} args.leaderboard The leaderboard to lookup, you can find these strings in the Season API call.
   * @param {String} [args.token] This parameter will optional if you're was declare in config file.
   * @param {String} [args.region=eu] The region.
   * @example
   * .leaderboard({ id: '1', leaderboard: 'achievement-points', token: 'CLIENT_TOKEN' });
   * // or
   * .leaderboard({ id: 1, leaderboard: 'achievement-points' });
   * @returns {?String} API link for send an request
   */

  leaderboard({ id, leaderboard, token = this._options.token, region = this._options.region } = {}) {
    if (
      !id ||
      !leaderboard ||
      token ||
      isNaN(parseInt(id)) ||
      typeof leaderboard !== 'string' ||
      typeof token !== 'string'
    ) {
      return undefined;
    }
    let nephalem = this._options.getRoot({ region, token });
    return Endpoints.Data(nephalem).Season.Leaderboard(id, leaderboard);
  }
}

module.exports = Season;
