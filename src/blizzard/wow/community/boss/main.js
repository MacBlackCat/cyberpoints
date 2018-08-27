'use strict';

const { getRoot } = require('../../../lib/util/Constants');
const { Endpoints } = require('../../lib/endpoints/community/Endpoints');

class Boss {
  constructor(access) {
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
    this._options = access;
  }

  // BOSS API

  /**
   * A list of all supported bosses. A 'boss' in this context should be
   * considered a boss encounter, which may include more than one NPC.
   *
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * // If you want pass any optional parameter just type 'undefined'
   * .community.boss.list(undefined, 'en_US');
   * @returns {?String} API link for send an request
   */

  list(region = this._options.region, locale = this._options.locale) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Boss.MasterList();
  }

  /**
   * The boss API provides information about bosses.
   * A 'boss' in this context should be considered a boss encounter,
   * which may include more than one NPC.
   *
   * @param {String|Number} bossId The ID of the boss you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * // If you want to pass any optional parameter just type 'undefined'
   * .community.boss.get('24723', 'kr', undefined);
   * @returns {?String} API link for send an request
   */

  get(bossId, region = this._options.region, locale = this._options.locale) {
    if (!bossId || isNaN(parseInt(bossId))) return undefined;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Boss.Boss(bossId);
  }
}

module.exports = Boss;
