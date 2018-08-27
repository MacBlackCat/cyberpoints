'use strict';

const { getRoot } = require('../../../lib/util/Constants');
const { Endpoints } = require('../../lib/endpoints/community/Endpoints');

class Resources {
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

  // DATA RESOURCES

  /**
   * The battlegroups data API provides the list of battlegroups for this region.
   *
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .battleGroups('us', 'en_US');
   * // or
   * .battleGroups();
   * @returns {?String} API link for send an request
   */

  battleGroups(region = this._options.region, locale = this._options.locale) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.BattleGroups();
  }

  /**
   * The character races data API provides a list of each race and their associated
   * faction, name, unique ID, and skin.
   *
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .characterRaces('eu', 'en_GB');
   * // or
   * .characterRaces();
   * @returns {?String} API link for send an request
   */

  characterRaces(region = this._options.region, locale = this._options.locale) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.CharacterRaces();
  }

  /**
   * The character classes data API provides a list of character classes.
   *
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .characterClasses('eu', 'en_GB');
   * // or
   * .characterClasses();
   * @returns {?String} API link for send an request
   */

  characterClasses(region = this._options.region, locale = this._options.locale) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.CharacterClasses();
  }

  /**
   * The character achievements data API provides a list of all of the
   * achievements that characters can earn as well as the category structure and hierarchy.
   *
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .characterAchievements('eu', 'en_GB');
   * // or
   * .characterAchievements();
   * @returns {?String} API link for send an request
   */

  characterAchievements(region = this._options.region, locale = this._options.locale) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.CharacterAchievements();
  }

  /**
   * The guild rewards data API provides a list of all guild rewards.
   *
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .guildRewards('eu', 'en_GB');
   * // or
   * .guildRewards();
   * @returns {?String} API link for send an request
   */

  guildRewards(region = this._options.region, locale = this._options.locale) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.GuildRewards();
  }

  /**
   * The guild perks data API provides a list of all guild perks.
   *
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .guildPerks('eu', 'en_GB');
   * // or
   * .guildPerks();
   * @returns {?String} API link for send an request
   */

  guildPerks(region = this._options.region, locale = this._options.locale) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.GuildPerks();
  }

  /**
   * The guild achievements data API provides a list of all of the
   * achievements that guilds can earn as well as the category structure and hierarchy.
   *
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .guildAchievements('eu', 'en_GB');
   * // or
   * .guildAchievements();
   * @returns {?String} API link for send an request
   */

  guildAchievements(region = this._options.region, locale = this._options.locale) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.GuildAchievements();
  }

  /**
   * The item classes data API provides a list of item classes.
   *
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .itemClasses('eu', 'en_GB');
   * // or
   * .itemClasses();
   * @returns {?String} API link for send an request
   */

  itemClasses(region = this._options.region, locale = this._options.locale) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.ItemClasses();
  }

  /**
   * The talents data API provides a list of talents, specs and glyphs for each class.
   *
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .talents('eu', 'en_GB');
   * // or
   * .talents();
   * @returns {?String} API link for send an request
   */

  talents(region = this._options.region, locale = this._options.locale) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.Talents();
  }

  /**
   * The different bat pet types (including what they are strong and weak against)
   *
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .petTypes('eu', 'en_GB');
   * // or
   * .petTypes();
   * @returns {?String} API link for send an request
   */

  petTypes(region = this._options.region, locale = this._options.locale) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.PetTypes();
  }
}

module.exports = Resources;
