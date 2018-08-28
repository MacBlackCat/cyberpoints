'use strict';

const { Endpoints } = require('../../lib/endpoints/community/Endpoints');
const { getRoot } = require('../../../lib/util/Constants');

class Act {
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

  // D3 ACT API

  /**
   * Get an index of acts
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .index({ region: 'us', locale: 'en_US' });
   * // or
   * .index();
   * @returns {?String} API link for send an request
   */

  index({ region = this._options.region, locale = this._options.locale } = {}) {
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Act.Index();
  }

  /**
   * Get a single act by id
   *
   * @param {Object} args Request arguments.
   * @param {String|Numer} args.actId The id of the act.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .get({ actId: '1', region: 'us', locale: 'en_US' });
   * // or
   * .get({ actId: 1 });
   * @returns {?String} API link for send an request
   */

  get({ actId, region = this._options.region, locale = this._options.locale } = {}) {
    if (!actId || isNaN(parseInt(actId))) return undefined;
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Act.Act(actId);
  }
}

module.exports = Act;
