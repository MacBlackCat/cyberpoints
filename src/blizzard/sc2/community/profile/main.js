'use strict';

const { getRoot } = require('../../../lib/util/Constants');
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

  // PROFILE API

  /**
   * This provides data about an individual SC2 profile.
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.id The ID of the profile to retrieve.
   * @param {String} args.profileRegion The region of the profile to retrieve.
   * @param {String} args.name The name of the profile to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .get({ id: '00', profileRegion: '1', name: 'sc2gamer', region: 'us', locale: 'en_US' });
   * // or
   * .get({ id: 00, progileRegion: '1', name: 'sc2gamer' });
   * @returns {?String} API link for send an request
   */

  get({ id, profileRegion, name, region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !id ||
      !profileRegion ||
      !name ||
      isNaN(parseInt(id)) ||
      typeof profileRegion !== 'string' ||
      typeof name !== 'string'
    ) {
      return undefined;
    }
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Profile.Profile(id, profileRegion, name);
  }

  /**
   * This provides data about an individual SC2 profile's ladders.
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.id The ID of the profile to retrieve.
   * @param {String} args.profileRegion The region of the profile to retrieve.
   * @param {String} args.name The name of the profile to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .ledders({ id: '00', profileRegion: '1', name: 'sc2gamer', region: 'us', locale: 'en_US' });
   * // or
   * .ledders({ id: 00, profileRegion: '1', name: 'sc2gamer' });
   * @returns {?String} API link for send an request
   */

  ledders({ id, profileRegion, name, region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !id ||
      !profileRegion ||
      !name ||
      isNaN(parseInt(id)) ||
      typeof profileRegion !== 'string' ||
      typeof name !== 'string'
    ) {
      return undefined;
    }
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Profile.Ledders(id, profileRegion, name);
  }

  /**
   * This provides data about an individual SC2 profile's match history.
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.id The ID of the profile to retrieve.
   * @param {String} args.profileRegion The region of the profile to retrieve.
   * @param {String} args.name The name of the profile to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .match({ id: '00', profileRegion: '1', name: 'sc2gamer', region: 'us', locale: 'en_US' });
   * // or
   * .match({ id: 00, profileRegion: '1', name: 'sc2gamer' });
   * @returns {?String} API link for send an request
   */

  match({ id, profileRegion, name, region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !id ||
      !profileRegion ||
      !name ||
      isNaN(parseInt(id)) ||
      typeof profileRegion !== 'string' ||
      typeof name !== 'string'
    ) {
      return undefined;
    }
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Profile.MatchHistory(id, profileRegion, name);
  }
}

module.exports = Profile;
