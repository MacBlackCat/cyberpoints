'use strict';

const { getRoot } = require('../../../lib/util/Constants');
const { Endpoints } = require('../../lib/endpoints/data/Endpoints');

class Keystone {
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

  // MYTHIC KEYSTONE LEADERBOARD API

  /**
   * Get an index of Mythic Keystone Leaderboard dungeon instances for a connected-realm
   *
   * @param {String|Number} connectedReamId The id of the connected realm.
   * @param {String} [token] This parameter will optional if you're was declare in config file.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .index('11', 'CLIENT_TOKEN','us', 'en_US');
   * // or
   * .index(11, 'CLIENT_TOKEN')
   * // or
   * .index('11');
   * @returns {?String} API link for send an request
   */

  index(connectedReamId, token = this._options.token, region = this._options.region, locale = this._options.locale) {
    if (!connectedReamId || !token || isNaN(parseInt(connectedReamId)) || typeof token !== 'string') {
      return undefined;
    }
    let core = getRoot({ region, locale, token: this._options.token });
    return Endpoints.Data(core).Keystone.Index(connectedReamId);
  }

  /**
   * Get a weekly Mythic Keystone Leaderboard by period
   *
   * @param {String|Number} connectedReamId The id of the connected realm.
   * @param {String|Number} dungeonId The id of the dungeon.
   * @param {String|Number} period The unique identifier for the leaderboard period.
   * @param {String} [token] This parameter will optional if you're was declare in config file.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .leaderboard(11, '197', 641, 'CLIENT_TOKEN', 'us', 'en_US');
   * // or
   * .leaderboard(11, '197', 641, 'CLIENT_TOKEN');
   * // or
   * .leaderboard('11', 197, '641');
   * @returns {?String} API link for send an request
   */

  leaderboard(
    connectedRalmId,
    dungeonId,
    period,
    token = this._options.token,
    region = this._options.region,
    locale = this._options.locale
  ) {
    if (
      !connectedRalmId ||
      !dungeonId ||
      !period ||
      !token ||
      isNaN(parseInt(connectedRalmId)) ||
      isNaN(parseInt(dungeonId)) ||
      isNaN(parseInt(period)) ||
      typeof token !== 'string'
    ) {
      return undefined;
    }
    let core = getRoot({ region, locale, token });
    return Endpoints.Data(core).Keystone.Leaderboard(connectedRalmId, dungeonId, period);
  }
}

module.exports = Keystone;
