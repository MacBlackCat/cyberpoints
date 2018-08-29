'use strict';

const { Endpoints } = require('../../lib/endpoints/community/Endpoints');

class Guild {
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

  // GUILD PROFILE API

  /**
   * The guild profile API is the primary way to access guild information.
   * This guild profile API can be used to fetch a single guild at a time through
   * an HTTP GET request to a url describing the guild profile resource. By default,
   * a basic dataset will be returned and with each request and zero or more additional
   * fields can be retrieved.
   *
   * There are no required query string parameters when accessing this resource,
   * although the `fields` query string parameter can optionally be passed to indicate
   * that one or more of the optional datasets is to be retrieved. Those additional
   * fields are listed in the method titled "Optional Fields".
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The realm the guild lives on.
   * @param {String} args.guildName Name of the guild being queried.
   * @param {Array} [args.fields=achievements,challenge] The optional data you want to
   * retrieve about the guild. Each field value is explained in more detail in the
   * following methods. If no fields are specified the API will only return basic
   * data about the guild.
   * @param {String} [args.region=eu] The region.
   * @param {String} [arrgs.locale=en_GB] What locale to use in the response.
   * @example
   * .profile({ realm: 'Medivh', guildName: 'TempGuildName' });
   * // returns just achievements and members.
   * .profile({ realm: 'Medivh', guildName: 'TempGuildName', fields: ['achievements', 'members'] });
   * // returns with 'achievements and members' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  profile({ realm, guildName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !guildName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof guildName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['achievements,challenge'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Guild.Profile(realm.toLowerCase(), guildName.toLowerCase(), Fields.toString());
  }

  /**
   * A list of characters that are a member of the guild. When the members
   * list is requested, a list of character objects is returned. Each object
   * in the returned members list contains a character block as well as a rank field.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The realm the guild lives on.
   * @param {String} args.guildName Name of the guild being queried.
   * @param {Array} [args.fields=members] A value of members tells the API
   * to include guild's `member` list in the response.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .members({ realm: 'Medivh', guildName: 'TempGuildName' });
   * // returns just members.
   * .members({ realm: 'Medivh', guildName: 'TempGuildName', fields: ['challange', 'news'] });
   * // returns with 'members' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  members({ realm, guildName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !guildName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof guildName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['members'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Guild.Members(realm.toLowerCase(), guildName.toLowerCase(), Fields.toString());
  }

  /**
   * A set of data structures that describe the achievements earned by the guild.
   * When requesting achievement data, several sets of data will be returned.
   *
   * - `achievementsCompleted` - A list of achievement ids.
   * - `achievementsCompletedTimestamp` - A list of timestamps whose places correspond
   *    to the achievement ids in the `achievementsCompleted` list. The value of each timestamp
   *    indicates when the related achievement was earned by the guild.
   * - `criteria` - A list of criteria ids that can be used to determine the partial completeness
   *    of guild achievements.
   * - `criteriaQuantity` - A list of values associated with a given achievement criteria.
   *    The position of a value corresponds to the position of a given achievement criteria.
   * - `criteriaTimestamp` - A list of timestamps where the value represents when the criteria
   *    was considered complete. The position of a value corresponds to the position of a given achievement criteria.
   * - `criteriaCreated` - A list of timestamps where the value represents when the criteria was
   *    considered started. The position of a value corresponds to the position of a given achievement criteria.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The realm the guild lives on.
   * @param {String} args.guildName Name of the guild being queried.
   * @param {Array} [args.fields=achievements] A value of `achievements` tells the API
   * to include the guild's achievement data in the response
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .achievements({ realm: 'Medivh', guildName: 'TempGuildName' });
   * // returns just achievements.
   * .achievements({ realm: 'Medivh', guildName: 'TempGuildName', fields: ['members', 'news'] });
   * // returns with 'achievements' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  achievements({ realm, guildName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !guildName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof guildName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['achievements'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Guild.Achievements(realm.toLowerCase(), guildName.toLowerCase(), Fields.toString()); // eslint-disable-line max-len
  }

  /**
   * A set of data structures that describe the news feed of the guild.
   * When the news feed is requested, you receive a list of news objects.
   * Each one has a type, a timestamp, and then some other data depending
   * on the type: `itemId`, `achievement` object, etc.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The realm the guild lives on.
   * @param {String} args.guildName Name of the guild being queried.
   * @param {Array} [args.fields=news] A value of `news` tells the API
   * to include the guild's news feed in the response.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .news({ realm: 'Medivh', guildName: 'TempGuildName' });
   * // returns just news.
   * .news({ realm: 'Medivh', guildName: 'TempGuildName', fields: ['challenge', 'members'] });
   * // returns with 'news' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  news({ realm, guildName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !guildName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof guildName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['news'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Guild.News(realm.toLowerCase(), guildName.toLowerCase(), Fields.toString());
  }

  /**
   * The top 3 challenge mode guild run times for each challenge mode map.
   *
   * @param {Object} args Request arguments.
   * @param {String} args.realm The realm the guild lives on.
   * @param {String} args.guildName Name of the guild being queried.
   * @param {Array} [args.fields=challenge] A value of `challenge` tells the API
   * to include the guild's Challenge Mode data in the response.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .challenge({ realm: 'Medivh', guildName: 'TempGuildName' });
   * // returns just challenge.
   * .challenge({ realm: 'Medivh', guildName: 'TempGuildName', fields: ['members', 'news'] });
   * // returns with 'challenge' in addition to the `fields` declared.
   * @returns {?String} API link for send an request
   */

  challenge({ realm, guildName, fields = [], region = this._options.region, locale = this._options.locale } = {}) {
    if (
      !realm ||
      !guildName ||
      !(fields instanceof Array) ||
      typeof realm !== 'string' ||
      typeof guildName !== 'string'
    ) {
      return undefined;
    }
    let molten = ['challenge'];
    const Fields = fields && fields.length ? Array.prototype.push.apply(molten, fields) && molten : molten;
    let core = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Guild.Challenge(realm.toLowerCase(), guildName.toLowerCase(), Fields.toString());
  }
}

module.exports = Guild;
