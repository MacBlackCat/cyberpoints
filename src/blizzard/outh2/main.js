'use strict';

const { Endpoints } = require('./lib/endpoints/community/Endpoints');
const { getRoot } = require('../lib/util/Constants');
const Profile = require('./profile/main');
const { Token } = require('../lib/util/Constants');

class Outh2 {
  constructor(options) {
    /**
     * All options for this client
     *
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
    this._options = Token.validate(options);
    this.profile = new Profile(this._options);
  }

  // ACCOUNT API

  /**
   * Returns the account information of a user
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.token] This parameter will optional if you're was declare in config file.
   * @param {String} [args.region=eu] The region.
   * @example
   * .user({ token: 'CLIENT_TOKEN', region: 'eu' });
   * // or
   * .user();
   * @returns {?String} API link for send an request
   */

  user({ token = this._options.token, region = this._options.region } = {}) {
    if (!token || typeof token !== 'string') return undefined;
    let conn = getRoot({ region, token });
    return Endpoints.Community(conn).Account();
  }
}

module.exports = Outh2;
