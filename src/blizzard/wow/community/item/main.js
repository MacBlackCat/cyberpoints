'use strict';

const { getRoot } = require('../../../lib/util/Constants');
const { Endpoints } = require('../../lib/endpoints/community/Endpoints');

class Item {
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

  // ITEM API

  /**
   * The item API provides detailed item information. This includes item set
   * information if this item is part of a set.
   *
   * @param {String|Number} itemId Unique ID of the item being requested.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .get('18803');
   * @returns {?String} API link for send an request
   */

  get(itemId, region = this._options.region, locale = this._options.locale) {
    if (!itemId || isNaN(parseInt(itemId))) return undefined;
    const molten = { region, locale, key: this._options.key };
    let core = getRoot(molten);
    return Endpoints.Community(core).Item.Item(itemId);
  }

  /**
   * The item API provides detailed item information. This includes item set
   * information if this item is part of a set.
   *
   * @param {String|Number} setId Unique ID of the set being requested.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .set('1060');
   * @returns {?String} API link for send an request
   */

  set(setId, region = this._options.region, locale = this._options.locale) {
    if (!setId || isNaN(parseInt(setId))) return undefined;
    const molten = { region, locale, key: this._options.key };
    let core = getRoot(molten);
    return Endpoints.Community(core).Item.ItemSet(setId);
  }
}

module.exports = Item;
