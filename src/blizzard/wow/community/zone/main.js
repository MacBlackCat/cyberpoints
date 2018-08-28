'use strict';

const { getRoot } = require('../../../lib/util/Constants');
const { Endpoints } = require('../../lib/endpoints/community/Endpoints');

class Zone {
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

  // ZONE API

  /**
   * A list of all supported zones and their bosses. A 'zone' in this context
   * should be considered a dungeon, or a raid, not a zone as in a world zone.
   * A 'boss' in this context should be considered a boss encounter,
   * which may include more than one NPC.
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
    const molten = { region, locale, key: this._options.key };
    let core = getRoot(molten);
    return Endpoints.Community(core).Zone.MasterList();
  }

  /**
   * The Zone API provides some information about zones.
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.zoneId The ID of the zone you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .get({ zoneId: '4131', region: 'us', locale: 'en_US' });
   * // or
   * .get({ zoneId: 4131 });
   * @returns {?String} API link for send an request
   */

  get({ zoneId, region = this._options.region, locale = this._options.locale } = {}) {
    if (!zoneId || isNaN(parseInt(zoneId))) return undefined;
    const molten = { region, locale, key: this._options.key };
    let core = getRoot(molten);
    return Endpoints.Community(core).Zone.Zone(zoneId);
  }
}

module.exports = Zone;
