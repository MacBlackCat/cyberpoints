'use strict';

const { Endpoints } = require('../../lib/endpoints/community/Endpoints');

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
   * @param {Object} args Request arguments.
   * @param {String} args.account The Battle Tag for the account.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .account({ account: 'abc#0000', region: 'us', locale: 'en_US' });
   * // or
   * .account({ account: 'abc#0000' });
   * @returns {?String} API link for send an request
   */

  account({ account, region = this._options.region, locale = this._options.locale } = {}) {
    if (!account || typeof account !== 'string') return undefined;
    let nephalem = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Profile.Account(account.replace('#', '-'));
  }

  /**
   * Get a single hero
   *
   * @param {Object} args Request arguments.
   * @param {String} args.account The Battle Tag for the account.
   * @param {String|Number} args.heroId The id of the hero.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .hero({ account: 'abc#0000', heroId: '000', region: 'us', locale: 'en_US' });
   * // or
   * .hero({ account: 'abc#0000', heroId: '000' });
   * @returns {?String} API link for send an request
   */

  hero({ account, heroId, region = this._options.region, locale = this._options.locale } = {}) {
    if (!account || heroId || typeof account !== 'string' || isNaN(parseInt(heroId))) {
      return undefined;
    }
    let nephalem = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Profile.Hero(account.replace('#', '-'), heroId);
  }

  /**
   * Get a list of items for the specified hero
   *
   * @param {Object} args Request arguments.
   * @param {String} args.account The Battle Tag for the account.
   * @param {String|Number} args.heroId The id of the hero.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .heroItems({ account: 'abc#0000', heroId: '000', region: 'us', locale: 'en_US' });
   * // or
   * .heroItems({ account: 'abc#0000', heroId: '000' });
   * @returns {?String} API link for send an request
   */

  heroItems({ account, heroId, region = this._options.region, locale = this._options.locale } = {}) {
    if (!account || heroId || typeof account !== 'string' || isNaN(parseInt(heroId))) {
      return undefined;
    }
    let nephalem = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Profile.DetailedHeroItems(account.replace('#', '-'), heroId);
  }

  /**
   * Get a list of items for the specified hero's followers
   *
   * @param {Object} args Request arguments.
   * @param {String} args.account The Battle Tag for the account.
   * @param {String|Number} args.heroId The id of the hero.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .followerItems({ account: 'abc#0000', heroId: '000', region: 'us', locale: 'en_US' });
   * // or
   * .followerItems({ account: 'abc#0000', heroId: '000' });
   * @returns {?String} API link for send an request
   */

  followerItems({ account, heroId, region = this._options.region, locale = this._options.locale } = {}) {
    if (!account || heroId || typeof account !== 'string' || isNaN(parseInt(heroId))) {
      return undefined;
    }
    let nephalem = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Profile.DetailedFolloweItems(account.replace('#', '-'), heroId);
  }
}

module.exports = Profile;
