'use strict';

const { Endpoints } = require('../../lib/endpoints/community/Endpoints');
const { getRoot } = require('../../../lib/util/Constants');

class Profile {
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

  // D3 PROFILE API

  /**
   * Get a single profile
   *
   * @param {String} account The Battle Tag for the account.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .account('abc#0000', 'us', 'en_US');
   * // or
   * .account('abc#0000');
   * @returns {?String} API link for send an request
   */

  account(account, region = this._options.region, locale = this._options.locale) {
    if (!account || typeof account !== 'string') return undefined;
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Profile.Account(account.replace('#', '-'));
  }

  /**
   * Get a single hero
   *
   * @param {String} account The Battle Tag for the account.
   * @param {String|Number} heroId The id of the hero.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .hero('abc#0000', '000', 'us', 'en_US');
   * // or
   * .hero('abc#0000', '000');
   * @returns {?String} API link for send an request
   */

  hero(account, heroId, region = this._options.region, locale = this._options.locale) {
    if (!account || heroId || typeof account !== 'string' || isNaN(parseInt(heroId))) {
      return undefined;
    }
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Profile.Hero(account, heroId);
  }

  /**
   * Get a list of items for the specified hero
   *
   * @param {String} account The Battle Tag for the account.
   * @param {String|Number} heroId The id of the hero.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .heroItems('abc#0000', '000', 'us', 'en_US');
   * // or
   * .heroItems('abc#0000', '000');
   * @returns {?String} API link for send an request
   */

  heroItems(account, heroId, region = this._options.region, locale = this._options.locale) {
    if (!account || heroId || typeof account !== 'string' || isNaN(parseInt(heroId))) {
      return undefined;
    }
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Profile.DetailedHeroItems(account, heroId);
  }

  /**
   * Get a list of items for the specified hero's followers
   *
   * @param {String} account The Battle Tag for the account.
   * @param {String|Number} heroId The id of the hero.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .followerItems('abc#0000', '000', 'us', 'en_US');
   * // or
   * .followerItems('abc#0000', '000');
   * @returns {?String} API link for send an request
   */

  followerItems(account, heroId, region = this._options.region, locale = this._options.locale) {
    if (!account || heroId || typeof account !== 'string' || isNaN(parseInt(heroId))) {
      return undefined;
    }
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Profile.DetailedFolloweItems(account, heroId);
  }
}

module.exports = Profile;
