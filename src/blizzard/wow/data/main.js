'use strict';

const Class = require('./class/main');
const ConnectedRealm = require('./connectedrealm/main');
const Keystone = require('./keystone/main');
const Realm = require('./realm/main');
const Region = require('./region/main');
const Specialization = require('./specialization/main');

const { Endpoints } = require('../lib/endpoints/data/Endpoints');

class Data {
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
    this.class = new Class(options);
    this.connectedRealm = new ConnectedRealm(options);
    this.keystone = new Keystone(options);
    this.realm = new Realm(options);
    this.region = new Region(options);
    this.specialization = new Specialization(options);
  }

  // MYTHIC CHALLENGE MODE API

  /**
   * Get current period information about the Mythic Challenge Mode relevant
   * to Mythic Keystone Leaderboards
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.token] This parameter will optional if you're was declare in config file.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .challenge({ token: 'CLIENT_TOKEN', region: 'kr', locale: 'en_GB' });
   * // or
   * .challenge({ token: 'CLIENT_TOKEN' });
   * // or
   * .challenge();
   * @returns {?String} API link for send an request
   */

  challenge({ token = this._options.token, region = this._options.region, locale = this._options.locale } = {}) {
    if (!token || typeof token !== 'string') return undefined;
    let core = this._options.getRoot({ region, locale, token });
    return Endpoints.Data(core).MythicChallenge();
  }

  // MYTHIC RAID LEADERBOARD API

  /**
   * Get the leaderboard for a given raid and faction.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.raid The raid a leaderboard refers to.
   * @param {String} args.faction Player faction (Alliance or Horde).
   * @param {String} [args.token] This parameter will optional if you're was declare in config file.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .leaderboard({ raid: 'Uldir', faction: 'Alliance', token: 'CLIENT_TOKEN', region: 'kr', locale: 'en_GB' });
   * @returns {?String} API link for send an request
   */

  leaderboard({
    raid,
    faction,
    token = this._options.token,
    region = this._options.region,
    locale = this._options.locale
  } = {}) {
    if (!raid || !faction || !token || typeof token !== 'string') return undefined;
    let core = this._options.getRoot({ region, locale, token });
    return Endpoints.Data(core).Raid(raid, faction);
  }

  // WOW TOKEN API

  /**
   * Get the WoW Token index
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.token] This parameter will optional if you're was declare in config file.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .token({ token: 'CLIENT_TOKEN', region: 'kr', locale: 'en_GB' });
   * // or
   * .token({ token: 'CLIENT_TOKEN' });
   * // or
   * .token();
   * @returns {?String} API link for send an request
   */

  token({ token = this._options.token, region = this._options.region, locale = this._options.locale } = {}) {
    if (!token || typeof token !== 'string') return undefined;
    let core = this._options.getRoot({ region, locale, token });
    return Endpoints.Data(core).Token();
  }
}

module.exports = Data;
