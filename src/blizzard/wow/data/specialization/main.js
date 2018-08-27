'use strict';

const { getRoot } = require('../../../lib/util/Constants');
const { Endpoints } = require('../../lib/endpoints/data/Endpoints');

class Specialization {
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

  // PLAYABLE SPECIALIZATION API

  /**
   * Get an index of playable specializations
   *
   * @param {String} [token] This parameter will optional if you're was declare in config file.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .index('CLIENT_TOKEN', 'eu', 'en_GB');
   * // or
   * .index('CLIENT_TOKEN');
   * // or
   * .index();
   * @returns {?String} API link for send an request
   */

  index(token = this._options.token, region = this._options.region, locale = this._options.locale) {
    if (!token || typeof token !== 'string') return undefined;
    let core = getRoot({ region, locale, token });
    return Endpoints.Data(core).Specialization.Index();
  }

  /**
   * Get a playable specialization by id
   *
   * @param {String|Number} specId The id of a playable specialization.
   * @param {String} [token] This parameter will optional if you're was declare in config file.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .get('262', 'CLIENT_TOKEN', 'eu', 'en_GB');
   * // or
   * .get(262, 'CLIENT_TOKEN');
   * // or
   * .get('262');
   * @returns {?String} API link for send an request
   */

  get(specId, token = this._options.token, region = this._options.region, locale = this._options.locale) {
    if (!specId || !token || isNaN(parseInt(specId)) || typeof token !== 'string') {
      return undefined;
    }
    let core = getRoot({ region, locale, token });
    return Endpoints.Data(core).Specialization.Specialization(specId);
  }
}

module.exports = Specialization;
