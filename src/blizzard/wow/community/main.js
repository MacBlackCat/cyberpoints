'use strict';

const Boss = require('./boss/main');
const Challenge = require('./challenge/main');
const Character = require('./character/main');
const Guild = require('./guild/main');
const Item = require('./item/main');
const Pet = require('./pet/main');
const Resource = require('./resources/main');
const Zone = require('./zone/main');

const { getRoot, Brackets } = require('../../lib/util/Constants');
const { Endpoints } = require('../lib/endpoints/community/Endpoints');

class Community {
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
    this.boss = new Boss(this._options);
    this.challenge = new Challenge(this._options);
    this.character = new Character(this._options);
    this.guild = new Guild(this._options);
    this.item = new Item(this._options);
    this.pet = new Pet(this._options);
    this.resource = new Resource(this._options);
    this.zone = new Zone(this._options);
  }

  // ACHIEVEMENT API

  /**
   * This provides data about an individual achievement.
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.id The ID of the achievement to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .achievement({ id: '2144', region: 'us', locale: 'en_US' });
   * // or
   * .achievement({ id: 2144 });
   * @returns {?String} API link for send an request
   */

  achievement({ id, region = this._options.region, locale = this._options.locale } = {}) {
    if (!id || isNaN(parseInt(id))) return undefined;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Achievement(id);
  }

  // AUCTION API

  /**
   * Auction APIs currently provide rolling batches of data about current auctions.
   * Fetching auction dumps is a two step process that involves checking a per-realm
   * index file to determine if a recent dump has been generated and then fetching
   * the most recently generated dump file if necessary.
   *
   * This API resource provides a per-realm list of recently generated auction
   * house data dumps.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The realm being requested.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .auction({ realm: 'medivh', region: 'us', locale: 'en_US' });
   * // or
   * .auction({ realm: 'medivh' });
   * @returns {?String} API link for send an request
   */

  auction({ realm, region = this._options.region, locale = this._options.locale } = {}) {
    if (!realm || typeof realm !== 'string') return undefined;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Auction(realm.toLocaleLowerCase());
  }

  // MOUNT API

  /**
   * A list of all supported mounts.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .mount({ region: 'us', locale: 'en_US' });
   * // or
   * .mount();
   * @returns {?String} API link for send an request
   */

  mount({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Mount();
  }

  // PVP API

  /**
   * The Leaderboard API endpoint provides leaderboard information
   * for the 2v2, 3v3, 5v5 and Rated Battleground leaderboards.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.bracket The type of leaderboard you want to retrieve.
   * Valid entries are `2v2`, `3v3`, `5v5`, and `rbg`.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .pvp({ bracket: '2v2', region: 'us', locale: 'en_US' });
   * // or
   * .pvp({ bracket: 'rbg' });
   * @returns {?String} API link for send an request
   */

  pvp({ bracket, region = this._options.region, locale = this._options.locale } = {}) {
    if (!bracket || typeof bracket !== 'string' || !Brackets.includes(bracket)) {
      return undefined;
    }
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Pvp(bracket);
  }

  // QUEST API

  /**
   * Retrieve metadata for a given quest.
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.questId The ID of the desired quest.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .quest({ questId: '13146', region: 'us', locale: 'en_US' });
   * // or
   * .quest({ questId: 13146 });
   * @returns {?String} API link for send an request
   */

  quest({ questId, region = this._options.region, locale = this._options.locale } = {}) {
    if (!questId || isNaN(parseInt(questId))) return undefined;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Quest(questId);
  }

  // REALM STATUS API

  /**
   * The realm status API allows developers to retrieve realm status information.
   * This information is limited to whether or not the realm is up, the type and
   * state of the realm, the current population, and the status of the two world PvP zones.
   *
   * There are no required query string parameters when accessing this resource,
   * although the optional `realms` parameter can be used to limit the realms returned
   * to a specific set of realms.
   *
   * __PvP Area Status Fields__
   *
   * - `area` - An internal id of this zone.
   * - `controlling-faction` - Which faction is controlling the zone at the moment.
   * Possible values are
   *  - `0`: Alliance
   *  - `1`: Horde
   *  - `2`: Neutral
   * - `status` - The current status of the zone. The possible values are
   *  - `-1`: Unknown
   *  - `0`: Idle
   *  - `1`: Populating
   *  - `2`: Active
   *  - `3`: Concluded
   * - `next` - A timestamp of when the next battle starts.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .reamlStatus({ region: 'us', locale: 'en_US' });
   * // or
   * .reamlStatus();
   * @returns {?String} API link for send an request
   */

  reamlStatus({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).RealmStatus();
  }

  // RECIPE API

  /**
   * The recipe API provides basic recipe information.
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.recipeId Unique ID for the desired recipe.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .recipe({ recipeId: '33994', region: 'us', locale: 'en_US' });
   * // or
   * .recipe({ recipeId: 33994 });
   * @returns {?String} API link for send an request
   */

  recipe({ recipeId, region = this._options.region, locale = this._options.locale } = {}) {
    if (!recipeId || isNaN(parseInt(recipeId))) return undefined;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Recipe(recipeId);
  }

  // SPELL API

  /**
   * The spell API provides some information about spells.
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.spellId The ID of the spell you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .spell({ spellId: '8056', region: 'us', locale: 'en_US' });
   * // or
   * .spell({ spellId: 8056 });
   * @returns {?String} API link for send an request
   */

  spell({ spellId, region = this._options.region, locale = this._options.locale } = {}) {
    if (!spellId || isNaN(parseInt(spellId))) return undefined;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Spell(spellId);
  }
}

module.exports = Community;
