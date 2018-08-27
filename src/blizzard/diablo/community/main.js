'use strict';

const Act = require('./act/main');
const ItemType = require('./itemtype/main');
const Profile = require('./profile/main');

const { Endpoints } = require('../lib/endpoints/community/Endpoints');
const { getRoot } = require('../../lib/util/Constants');

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
    this.act = new Act(this._options);
    this.itemType = new ItemType(this._options);
    this.profile = new Profile(this._options);
  }

  // D3 ARTISAN AND RECIPE API

  /**
   * Get a single artisan by slug
   *
   * @param {String} artisanSlug The slug of the artisan.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .artisan('blacksmith', 'us', 'en_US');
   * // or
   * .artisan('blacksmith');
   * @returns {?String} API link for send an request
   */

  artisan(artisanSlug, region = this._options.region, locale = this._options.locale) {
    if (!artisanSlug || typeof artisanSlug !== 'string') return undefined;
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).ArtisanAndRecipe.Artisan(artisanSlug);
  }

  /**
   * Get a single artisan by slug
   *
   * @param {String} artisanSlug The slug of the artisan.
   * @param {String} recipeSlug The slug of the recipe.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .recipe('blacksmith', 'apprentice-flamberge', 'us', 'en_US');
   * // or
   * .recipe('blacksmith', 'apprentice-flamberge');
   * @returns {?String} API link for send an request
   */

  recipe(artisanSlug, recipeSlug, region = this._options.region, locale = this._options.locale) {
    if (!artisanSlug || !recipeSlug || typeof artisanSlug !== 'string' || typeof recipeSlug !== 'string') {
      return undefined;
    }
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).ArtisanAndRecipe.Recipe(artisanSlug, recipeSlug);
  }

  // D3 CHARACTER CLASS AND SKILL API

  /**
   * Get a single character class by slug
   *
   * @param {String} classSlug The slug of the character class.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .characterClass('barbarian', 'us', 'en_US');
   * // or
   * .characterClass('barbarian');
   * @returns {?String} API link for send an request
   */

  characterClass(classSlug, region = this._options.region, locale = this._options.locale) {
    if (!classSlug || typeof classSlug !== 'string') return undefined;
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).CharacterClassAndSkill.CharacterClass(classSlug);
  }

  /**
   * Get a single skill by slug, for a specific character class
   *
   * @param {String} classSlug The slug of the character class.
   * @param {String} skillSlug The slug of the skill.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .skill('barbarian', 'bash', 'us', 'en_US');
   * // or
   * .skill('barbarian', 'bash');
   * @returns {?String} API link for send an request
   */

  skill(classSlug, skillSlug, region = this._options.region, locale = this._options.locale) {
    if (!classSlug || !skillSlug || typeof classSlug !== 'string' || typeof skillSlug !== 'string') {
      return undefined;
    }
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).CharacterClassAndSkill.Skill(classSlug, skillSlug);
  }

  // D3 FOLLOWER API

  /**
   * Get a single follower by slug
   *
   * @param {String} followerSlug The slug of the follower.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .follower('templar', 'us', 'en_US');
   * // or
   * .follower('templar');
   * @returns {?String} API link for send an request
   */

  follower(followerSlug, region = this._options.region, locale = this._options.locale) {
    if (!followerSlug || typeof followerSlug !== 'string') return undefined;
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Follower(followerSlug);
  }

  // D3 ITEM API

  /**
   * Get a single item by item slug and ID
   *
   * @param {String} itemSlugAndId The slug and ID of the item.
   * @param {String} [region=eu] The region.
   * @param {String} [locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .item('itemSlugAndId', 'us', 'en_US');
   * // or
   * .item('corrupted-ashbringer-Unique_Sword_2H_104_x1');
   * @returns {?String} API link for send an request
   */

  item(itemSlugAndId, region = this._options.region, locale = this._options.locale) {
    if (!itemSlugAndId || typeof itemSlugAndId !== 'string') return undefined;
    let nephalem = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Item(itemSlugAndId);
  }
}

module.exports = Community;
