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

  fetch(region = this._options.region) {
    if (typeof region !== 'string') return undefined;
    let core = getRoot({ region, key: this._options.key, secret: this._options.secret });
    return Endpoints.Credentails(core).FetchToken();
  }

  check(token = this._options.token, region = this._options.region) {
    if (!token || typeof token !== 'string') return undefined;
    let core = getRoot({ region });
    return Endpoints.Credentails(core).CheckToken(token);
  }
}

module.exports = Credentails;
