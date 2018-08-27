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
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=profile] The dataset you wish to retrieve for the character.
   * Each field value is explained in more detail in the following methods.
   * If no fields are specified the API will only return basic data about the character.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .profile('test-realm', 'Peratryn', ['guild', 'feed']);
   * @returns {?String} API link for send an request
   */

  profile(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'profile';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Profile(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A map of achievement data including completion timestamps and criteria information.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=achievements] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .achievements('test-realm', 'Peratryn', ['achievements', 'feed']);
   * @returns {?String} API link for send an request
   */

  achievements(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'achievements';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Achievements(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A map of a character's appearance settings such as which face texture
   * they've selected and whether or not a healm is visible.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=appearance] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .appearance('test-realm', 'Peratryn', ['feed', 'appearance']);
   * @returns {?String} API link for send an request
   */

  appearance(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'appearance';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Appearance(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * The activity feed of the character.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=feed] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .feed('test-realm', 'Peratryn', ['guild', 'feed']);
   * @returns {?String} API link for send an request
   */

  feed(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'feed';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Feed(realm.toLowerCase(), characterName, Fields);
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
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=guild] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .guild('test-realm', 'Peratryn', ['guild', 'feed']);
   * @returns {?String} API link for send an request
   */

  guild(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'guild';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Guild(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A list of all of the combat pets obtained by the character.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=hunterPets] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .hunterPets('test-realm', 'Peratryn', ['hunterPets', 'feed']);
   * @returns {?String} API link for send an request
   */

  hunterPets(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'hunterPets';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.HunterPets(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A list of items equipped by the character. Use of this field will also
   * include the average item level and average item level equipped for the character.
   *
   * When the `items` field is used, a map structure is returned that contains
   * information on the equipped items of that character as well as the average item level of the character.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=items] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .items('test-realm', 'Peratryn', ['items', 'guild']);
   * @returns {?String} API link for send an request
   */

  items(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'items';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Items(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A list of all of the mounts obtained by the character.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=mounts] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .mounts('test-realm', 'Peratryn', ['mounts', 'feed']);
   * @returns {?String} API link for send an request
   */

  mounts(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'mounts';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Mounts(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A list of the battle pets obtained by the character.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=pets] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .pets('test-realm', 'Peratryn', ['pets', 'mounts']);
   * @returns {?String} API link for send an request
   */

  pets(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'pets';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Pets(realm.toLowerCase(), characterName, Fields);
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
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=petSlots] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .petSlots('test-realm', 'Peratryn', ['petSlots', 'mounts']);
   * @returns {?String} API link for send an request
   */

  petSlots(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'petSlots';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.PetStlots(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A list of the character's professions. Does not include class professions.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=professions] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .professions('test-realm', 'Peratryn', ['professions', 'feed']);
   * @returns {?String} API link for send an request
   */

  professions(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'professions';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Professions(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A list of raids and bosses indicating raid progression and completeness.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=progression] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .progression('test-realm', 'Peratryn', ['progression', 'feed']);
   * @returns {?String} API link for send an request
   */

  progression(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'progression';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Progression(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A map of pvp information including arena team membership and rated battlegrounds information.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=pvp] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .pvp('test-realm', 'Peratryn', ['pvp', 'guild']);
   * @returns {?String} API link for send an request
   */

  pvp(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'pvp';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Pvp(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A list of quests completed by the character.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=quests] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .quests('test-realm', 'Peratryn', ['quests', 'feed']);
   * @returns {?String} API link for send an request
   */

  quests(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'quests';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Quests(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A list of the factions that the character has an associated reputation with.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=reputation] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .reputation('test-realm', 'Peratryn', ['reputation', 'feed']);
   * @returns {?String} API link for send an request
   */

  reputation(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'reputation';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Reputation(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A map of character statistics.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=statistics] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .statistics('test-realm', 'Peratryn', ['statistics', 'feed']);
   * @returns {?String} API link for send an request
   */

  statistics(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'statistics';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Statistics(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A map of character attributes and stats.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=stats] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .stats('test-realm', 'Peratryn', ['stats', 'feed']);
   * @returns {?String} API link for send an request
   */

  stats(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'stats';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Stats(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A list of talent structures.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=talents] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .talents('test-realm', 'Peratryn', ['talents', 'stats']);
   * @returns {?String} API link for send an request
   */

  talents(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'talents';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Talents(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * A list of the titles obtained by the character including the currently selected title.
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=titles] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .titles('test-realm', 'Peratryn', ['titles', 'feed']);
   * @returns {?String} API link for send an request
   */

  titles(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'titles';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Titles(realm.toLowerCase(), characterName, Fields);
  }

  /**
   * Raw character audit data that powers the character audit on the game site
   *
   * @param {String} realm The character's realm. Can be provided as the proper realm name or the normalized realm name.
   * @param {String} characterName The name of the character you want to retrieve.
   * @param {Array} [fields=audit] Specifies what data you want to retrieve.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] What locale to use in the response.
   * @example
   * .audit('test-realm', 'Peratryn', ['audit', 'feed']);
   * @returns {?String} API link for send an request
   */

  audit(realm, characterName, fields, region = this._options.region, locale = this._options.locale) {
    if (!realm || !characterName || typeof realm !== 'string' || typeof characterName !== 'string') {
      return undefined;
    }
    const Fields = fields && fields.length ? fields.toString() : 'audit';
    const molten = {
      region,
      locale,
      key: this._options.key
    };
    let core = getRoot(molten);
    return Endpoints.Community(core).Character.Audit(realm.toLowerCase(), characterName, Fields);
  }
}

module.exports = Character;
