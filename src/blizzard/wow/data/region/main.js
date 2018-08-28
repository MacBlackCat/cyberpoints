'use strict';

const { getRoot } = require('../../../lib/util/Constants');
const { Endpoints } = require('../../lib/endpoints/data/Endpoints');

class Region {
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

  // REGION API

  /**
   * Get an index of regions
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.token] This parameter will optional if you're was declare in config file.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .index({ token: 'CLIENT_TOKEN', region: 'eu', locale: 'en_GB' });
   * // or
   * .index({ token: 'CLIENT_TOKEN' });
   * // or
   * .index();
   * @returns {?String} API link for send an request
   */

  index({ token = this._options.token, region = this._options.region, locale = this._options.locale } = {}) {
    if (!token || typeof token !== 'string') return undefined;
    let core = getRoot({ region, locale, token });
    return Endpoints.Data(core).Region.Index();
  }

  /**
   * Get a single region by id
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.regionId The id of the region.
   * @param {String} [args.token] This parameter will optional if you're was declare in config file.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .get({ regionId: '3', token: 'CLIENT_TOKEN', region: 'eu', locale: 'en_GB' });
   * // or
   * .get({ regionId: 3, token: 'CLIENT_TOKEN' });
   * // or
   * .get({ regionId: '3' });
   * @returns {?String} API link for send an request
   */

  get({ regionId, token = this._options.token, region = this._options.region, locale = this._options.locale } = {}) {
    if (!regionId || !token || isNaN(parseInt(regionId)) || typeof token !== 'string') {
      return undefined;
    }
    let core = getRoot({ region, locale, token });
    return Endpoints.Data(core).Region.Region(regionId);
  }
}

module.exports = Region;
