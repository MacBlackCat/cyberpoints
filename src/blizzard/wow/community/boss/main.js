'use strict';

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
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .list({ region: 'us', locale: 'en_US' });
   * // or
   * .list();
   * @returns {?String} API link for send an request
   */

  list({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Boss.MasterList();
  }

  /**
   * The boss API provides information about bosses.
   * A 'boss' in this context should be considered a boss encounter,
   * which may include more than one NPC.
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.bossId The ID of the boss you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .get({ bossId: '24723', region: 'kr', locale: 'en_GB' });
   * // or
   * .get({ bossId: 24723 })
   * @returns {?String} API link for send an request
   */

  get({ bossId, region = this._options.region, locale = this._options.locale } = {}) {
    if (!bossId || isNaN(parseInt(bossId))) return undefined;
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Boss.Boss(bossId);
  }
}

module.exports = Boss;
