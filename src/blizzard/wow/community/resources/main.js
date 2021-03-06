'use strict';

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
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .battleGroups({ region: 'us', locale: 'en_US' });
   * // or
   * .battleGroups();
   * @returns {?String} API link for send an request
   */

  battleGroups({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.BattleGroups();
  }

  /**
   * The character races data API provides a list of each race and their associated
   * faction, name, unique ID, and skin.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [region.locale=en_GB] What locale to use in the response.
   * @example
   * .characterRaces({ region: 'eu', locale: 'en_GB' });
   * // or
   * .characterRaces();
   * @returns {?String} API link for send an request
   */

  characterRaces({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.CharacterRaces();
  }

  /**
   * The character classes data API provides a list of character classes.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .characterClasses({ region: 'eu', locale: 'en_GB' });
   * // or
   * .characterClasses();
   * @returns {?String} API link for send an request
   */

  characterClasses({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.CharacterClasses();
  }

  /**
   * The character achievements data API provides a list of all of the
   * achievements that characters can earn as well as the category structure and hierarchy.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .characterAchievements({ region: 'eu', locale: 'en_GB' });
   * // or
   * .characterAchievements();
   * @returns {?String} API link for send an request
   */

  characterAchievements({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.CharacterAchievements();
  }

  /**
   * The guild rewards data API provides a list of all guild rewards.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .guildRewards({ region: 'eu', locale: 'en_GB' });
   * // or
   * .guildRewards();
   * @returns {?String} API link for send an request
   */

  guildRewards({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.GuildRewards();
  }

  /**
   * The guild perks data API provides a list of all guild perks.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .guildPerks({ region: 'eu', locale: 'en_GB' });
   * // or
   * .guildPerks();
   * @returns {?String} API link for send an request
   */

  guildPerks({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.GuildPerks();
  }

  /**
   * The guild achievements data API provides a list of all of the
   * achievements that guilds can earn as well as the category structure and hierarchy.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .guildAchievements({ region: 'eu', locale: 'en_GB' });
   * // or
   * .guildAchievements();
   * @returns {?String} API link for send an request
   */

  guildAchievements({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.GuildAchievements();
  }

  /**
   * The item classes data API provides a list of item classes.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .itemClasses({ region: 'eu', locale: 'en_GB' });
   * // or
   * .itemClasses();
   * @returns {?String} API link for send an request
   */

  itemClasses({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.ItemClasses();
  }

  /**
   * The talents data API provides a list of talents, specs and glyphs for each class.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .talents({ region: 'eu', locale: 'en_GB' });
   * // or
   * .talents();
   * @returns {?String} API link for send an request
   */

  talents({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.Talents();
  }

  /**
   * The different bat pet types (including what they are strong and weak against)
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .petTypes({ region: 'eu', locale: 'en_GB' });
   * // or
   * .petTypes();
   * @returns {?String} API link for send an request
   */

  petTypes({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Resources.PetTypes();
  }
}

module.exports = Resources;
