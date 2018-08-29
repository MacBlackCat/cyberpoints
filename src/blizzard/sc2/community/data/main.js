'use strict';

const { Endpoints } = require('../../lib/endpoints/community/Endpoints');

class Data {
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

  // DATA RESOURCES

  /**
   * This provides data about the achievements available in SC2.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .achievements({ region: 'us', locale: 'en_US' });
   * // or
   * .achievements();
   * @returns {?String} API link for send an request
   */

  achievements({ region = this._options.region, locale = this._options.locale } = {}) {
    let nephalem = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Resources.Achievements();
  }

  /**
   * This provides data about the rewards available in SC2.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .rewards({ region: 'us', locale: 'en_US' });
   * // or
   * .rewards();
   * @returns {?String} API link for send an request
   */

  rewards({ region = this._options.region, locale = this._options.locale } = {}) {
    let nephalem = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Resources.Rewards();
  }
}

module.exports = Data;
