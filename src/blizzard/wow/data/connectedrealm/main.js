'use strict';

const { getRoot } = require('../../../lib/util/Constants');
const { Endpoints } = require('../../lib/endpoints/data/Endpoints');

class ConnectedRealm {
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

  // CONNECTED REALM API

  /**
   * Get an index of connected-realms
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.token] This parameter will optional if you're was declare in config file.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .index({ token: 'CLIENT_TOKEN', region: 'us', locale: 'en_US' });
   * // or
   * .index({ token: 'CLIENT_TOKEN' });
   * // or
   * .index();
   * @returns {?String} API link for send an request
   */

  index({ token = this._options.token, region = this._options.region, locale = this._options.locale } = {}) {
    if (!token || typeof token !== 'string') return undefined;
    let core = getRoot({ region, locale, token });
    return Endpoints.Data(core).ConnectedRealm.Index();
  }

  /**
   * Get a single connected-realm by id
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.connectedRealmId The id of the connected realm.
   * @param {String} [args.token] This parameter will optional if you're was declare in config file.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .get({ connectedRealmId: 509, token: 'CLIENT_TOKEN', region: 'us', locale: 'en_US' });
   * // or
   * .get({ connectedRealmId: '509', token: 'CLIENT_TOKEN' })
   * // or
   * .get({ connectedRealmId: 509 });
   * @returns {?String} API link for send an request
   */

  get({
    connectedRealmId,
    token = this._options.token,
    region = this._options.region,
    locale = this._options.locale
  } = {}) {
    if (!connectedRealmId || !token || isNaN(parseInt(connectedRealmId)) || typeof token !== 'string') {
      return undefined;
    }
    let core = getRoot({ region, locale, token });
    return Endpoints.Data(core).ConnectedRealm.ConnectedRealm(connectedRealmId);
  }
}

module.exports = ConnectedRealm;
