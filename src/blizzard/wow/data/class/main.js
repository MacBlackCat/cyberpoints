'use strict';

const { getRoot } = require('../../../lib/util/Constants');
const { Endpoints } = require('../../lib/endpoints/data/Endpoints');

class Class {
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

  // PLAYABLE CLASS API

  /**
   * Get an index of playable classes
   *
   * @param {String} [token] This parameter will optional if you're was declare in config file.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .index('CLIENT_TOKEN', 'us', 'en_US');
   * // or
   * .index('CLIENT_TOKEN')
   * // or
   * .index();
   * @returns {?String} API link for send an request
   */

  index(token = this._options.token, region = this._options.region, locale = this._options.locale) {
    if (!token || typeof token !== 'string') return undefined;
    let core = getRoot({ region, locale, token });
    return Endpoints.Data(core).PlayableClass.Index();
  }

  /**
   * Get a playable class by id
   *
   * @param {String|Number} classId The id of a playable class
   * @param {String} [token] This parameter will optional if you're was declare in config file.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .get('7', 'CLIENT_TOKEN', 'us', 'en_US');
   * // or
   * .get(7, 'CLIENT_TOKEN');
   * // or
   * .get('7')
   * @returns {?String} API link for send an request
   */

  get(classId, token = this._options.token, region = this._options.region, locale = this._options.locale) {
    if (!classId || !token || isNaN(parseInt(classId)) || typeof token !== 'string') {
      return undefined;
    }
    let core = getRoot({ region, locale, token });
    return Endpoints.Data(core).PlayableClass.PlayableClass(classId);
  }
}

module.exports = Class;
