'use strict';

const { Endpoints } = require('../../lib/endpoints/community/Endpoints');
const { getRoot } = require('../../../lib/util/Constants');

class ItemType {
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

  // D3 ITEM TYPE API

  /**
   * Get an index of item types
   *
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .index('us', 'en_US');
   * // or
   * .index();
   * @returns {?String} API link for send an request
   */

  index(region = this._options.region, locale = this._options.locale) {
    const tristram = { region, locale, key: this._options.key };
    let nephalem = getRoot(tristram);
    return Endpoints.Community(nephalem).ItemType.Index();
  }

  /**
   * Get a single item type by slug
   *
   * @param {String} itemTypeSlug The slug of the item type
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .get('sword2h', 'us', 'en_US');
   * // or
   * .get('sword2h');
   * @returns {?String} API link for send an request
   */

  get(itemTypeSlug, region = this._options.region, locale = this._options.locale) {
    if (!itemTypeSlug || typeof itemTypeSlug !== 'string') return undefined;
    const tristram = { region, locale, key: this._options.key };
    let nephalem = getRoot(tristram);
    return Endpoints.Community(nephalem).ItemType.ItemType(itemTypeSlug);
  }
}

module.exports = ItemType;
