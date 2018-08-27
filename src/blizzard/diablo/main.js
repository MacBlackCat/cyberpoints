'use strict';

const Community = require('./community/main');
const Credentails = require('../credentails/main');
const Data = require('./data/main');
const { Token } = require('../lib/util/Constants');

class Diablo {
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
    this._options = Token.validate(options);
    this.community = new Community(this._options);
    this.credentails = new Credentails(this._options);
    this.data = new Data(this._options);
  }
}

module.exports = Diablo;
