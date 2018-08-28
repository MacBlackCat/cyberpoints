'use strict';

const { getRoot } = require('../lib/util/Constants');
const { Endpoints } = require('../lib/endpoints/Credentails');

class Credentails {
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

  /**
   * Get an access token.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @example
   * .fetch({ region: 'us' });
   * // or
   * .fetch();
   * @returns {?String} API link for send an request
   */

  fetch({ region = this._options.region } = {}) {
    if (typeof region !== 'string') return undefined;
    let core = getRoot({ region, key: this._options.key, secret: this._options.secret });
    return Endpoints.Credentails(core).FetchToken();
  }

  /**
   * Check the details of an token.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.token] The region.
   * @param {String} [args.region=eu] The region.
   * @example
   * .check({ token: 'CLIENT_TOKEN', region: 'us' });
   * // or
   * .check();
   * @returns {?String} API link for send an request
   */

  check({ token = this._options.token, region = this._options.region } = {}) {
    if (!token || typeof token !== 'string') return undefined;
    let core = getRoot({ region });
    return Endpoints.Credentails(core).CheckToken(token);
  }
}

module.exports = Credentails;
