'use strict';

const { getRoot } = require('../../../lib/util/Constants');
const { Endpoints } = require('../../lib/endpoints/community/Endpoints');

class Character {
  constructor(options) {
    /**
     * All options for this client
     * @type {Object}
     * @property {String} key The Client Key.
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

  // CHARACTER PROFILE API

  /**
   * The Character Profile API is the primary way to access character information.
   * This Character Profile API can be used to fetch a single character at a time
   * through an HTTP GET request to a URL describing the character profile resource.
   * By default, a basic dataset will be returned and with each request and zero or
   * more additional fields can be retrieved. To access this API, craft a resource
   * URL pointing to the character who's information is to be retrieved.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=profile] The dataset you wish to retrieve for the character.
   * Each field value is explained in more detail in the following methods.
   * If no fields are specified the API will only return basic data about the character.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .profile({ reailm: 'test-realm', characterName: 'Peratryn' });
   * // returns just profile.
   * .profile({ reailm: 'test-realm', characterName: 'Peratryn', fields: ['guild', 'feed'] });
   * // returns with 'profile' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  profile({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['profile'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Profile(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A map of achievement data including completion timestamps and criteria information.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=achievements] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .achievements({ reailm: 'test-realm', characterName: 'Peratryn' });
   * // returns just achievements.
   * .achievements({ realm: 'test-realm', characterName: 'Peratryn', fields: ['guild', 'feed'] });
   * // returns with 'achievements' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  achievements({
    realm,
    characterName,
    fields = [],
    region = this._options.region,
    locale = this._options.locale
  } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['achievements'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Achievements(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A map of a character's appearance settings such as which face texture
   * they've selected and whether or not a healm is visible.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=appearance] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .appearance({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just appearance.
   * .appearance({ realm: 'test-realm', characterName: 'Peratryn', fields: ['feed', 'guild'] });
   * // returns with 'appearance' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  appearance({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['appearance'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Appearance(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * The activity feed of the character.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=feed] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .feed({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just feed.
   * .feed({ realm: 'test-realm', characterName: 'Peratryn', fields: ['guild', 'items'] });
   * // returns with 'feed' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  feed({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    const molten = ['feed'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Feed(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A summary of the guild that the character belongs to.
   * If the character does not belong to a guild and this field is requested,
   * this field will not be exposed.
   *
   * When a guild is requested, a map is returned with key/value pairs that
   * describe a basic set of guild information. Note that the rank of the character
   * is not included in this block as it describes a guild and not a membership of the guild.
   * To retrieve the character's rank within the guild, you must specific a separate
   * request to the guild profile resource.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=guild] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .guild({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just guild.
   * .guild({ realm: 'test-realm', characterName: 'Peratryn', fields: ['items', 'feed'] });
   * // returns with 'guild' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  guild({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['guild'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Guild(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A list of all of the combat pets obtained by the character.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=hunterPets] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .hunterPets({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just hunterPets.
   * .hunterPets({ realm: 'test-realm', characterName: 'Peratryn', fields: ['guild', 'items'] });
   * // returns with 'hunterPets' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  hunterPets({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['hunterPets'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.HunterPets(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A list of items equipped by the character. Use of this field will also
   * include the average item level and average item level equipped for the character.
   *
   * When the `items` field is used, a map structure is returned that contains
   * information on the equipped items of that character as well as the average item level of the character.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=items] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .items({' realm: test-realm', characterName: 'Peratryn' });
   * // returns just items.
   * .items({' realm: test-realm', characterName: 'Peratryn', fields: ['items', 'guild'] });
   * // returns with 'items' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  items({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['items'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Items(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A list of all of the mounts obtained by the character.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=mounts] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .mounts({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just mounts.
   * .mounts({ realm: 'test-realm', characterName: 'Peratryn', fields: ['mounts', 'feed'] });
   * // returns with 'mounts' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  mounts({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['mounts'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Mounts(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A list of the battle pets obtained by the character.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=pets] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .pets({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just pets.
   * .pets({ realm: 'test-realm', characterName: 'Peratryn', fielids: ['feed', 'mounts'] });
   * // returns with 'pets' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  pets({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['pets'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Pets(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * Data about the current battle pet slots on this characters account.
   *
   * The pet slot contains which slot it is and whether the slot is empty or locked.
   * We also include the battlePetId which is unique for this character and can be
   * used to match a battlePetId in the pets field for this character. The ability
   * list is the list of 3 active abilities on that pet. If the pet is not high enough
   * level than it will always be the first three abilities that the pet has.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=petSlots] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .petSlots({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just petSlots.
   * .petSlots({ realm: 'test-realm', characterName: 'Peratryn', fields: ['pets', 'mounts'] });
   * // returns with 'petSlots' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  petSlots({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['petSlots'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.PetStlots(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A list of the character's professions. Does not include class professions.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=professions] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .professions({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just professions.
   * .professions({ realm: 'test-realm', characterName: 'Peratryn', fields: ['mounts', 'feed'] });
   * // returns with 'professions' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  professions({
    realm,
    characterName,
    fields = [],
    region = this._options.region,
    locale = this._options.locale
  } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['professions'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Professions(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A list of raids and bosses indicating raid progression and completeness.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=progression] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .progression({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just progression.
   * .progression({ realm: 'test-realm', characterName: 'Peratryn', fields: ['guild', 'feed'] });
   * // returns with 'progression' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  progression({
    realm,
    characterName,
    fields = [],
    region = this._options.region,
    locale = this._options.locale
  } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['progression'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Progression(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A map of pvp information including arena team membership and rated battlegrounds information.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=pvp] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .pvp({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just pvp.
   * .pvp({ realm: 'test-realm', characterName: 'Peratryn', fields: ['feed', 'mounts'] });
   * // returns with 'pvp' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  pvp({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['pvp'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Pvp(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A list of quests completed by the character.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=quests] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .quests({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just quests.
   * .quests({ realm: 'test-realm', characterName: 'Peratryn', fields: ['pvp', 'feed'] });
   * // returns with 'quests' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  quests({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['quests'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Quests(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A list of the factions that the character has an associated reputation with.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=reputation] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .reputation({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just reputation.
   * .reputation({ realm: 'test-realm', characterName: 'Peratryn', fields: ['quests', 'feed'] });
   * // returns with 'reputation' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  reputation({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['reputation'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Reputation(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A map of character statistics.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=statistics] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .statistics({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just statistics.
   * .statistics({ realm: 'test-realm', characterName: 'Peratryn', fields: ['guild', 'feed'] });
   * // returns with 'statistics' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  statistics({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['statistics'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Statistics(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A map of character attributes and stats.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=stats] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .stats({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just stats.
   * .stats({ realm: 'test-realm', characterName: 'Peratryn', fields: ['quests', 'feed'] });
   * // returns with 'stats' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  stats({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['stats'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Stats(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A list of talent structures.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=talents] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .talents({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just talents.
   * .talents({ realm: 'test-realm', characterName: 'Peratryn', fields: ['feed', 'stats'] });
   * // returns with 'talents' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  talents({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['talents'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Talents(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * A list of the titles obtained by the character including the currently selected title.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=titles] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .titles({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just titles.
   * .titles({ realm: 'test-realm', characterName: 'Peratryn', fields: ['guild', 'feed'] });
   * // returns with 'titles' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  titles({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['titles'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Titles(realm.toLowerCase(), characterName, Fields.toString());
  }

  /**
   * Raw character audit data that powers the character audit on the game site
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The character's realm. Can be provided as the proper
   * realm name or the normalized realm name.
   * @param {String} args.characterName The name of the character you want to retrieve.
   * @param {Array} [args.fields=audit] Specifies what data you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .audit({ realm: 'test-realm', characterName: 'Peratryn' });
   * // returns just audit.
   * .audit({ realm: 'test-realm', characterName: 'Peratryn', fields: ['titles', 'guild'] });
   * // returns with 'audit' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  audit({ realm, characterName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !characterName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof characterName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['audit'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Character.Audit(realm.toLowerCase(), characterName, Fields.toString());
  }
}

module.exports = Character;
