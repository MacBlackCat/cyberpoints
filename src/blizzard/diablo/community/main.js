'use strict';

const Act = require('./act/main');
const ItemType = require('./itemtype/main');
const Profile = require('./profile/main');

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
    this.act = new Act(options);
    this.itemType = new ItemType(options);
    this.profile = new Profile(options);
  }

  // D3 ARTISAN AND RECIPE API

  /**
   * Get a single artisan by slug
   *
   * @param {Object} args Request arguments.
   * @param {String} args.artisanSlug The slug of the artisan.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .artisan({ artisanSlug: 'blacksmith', region: 'us', locale: 'en_US' });
   * // or
   * .artisan({ artisanSlug: 'blacksmith' });
   * @returns {?String} API link for send an request
   */

  artisan({ artisanSlug, region = this._options.region, locale = this._options.locale } = {}) {
    if (!artisanSlug || typeof artisanSlug !== 'string') return undefined;
    let nephalem = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).ArtisanAndRecipe.Artisan(artisanSlug);
  }

  /**
   * Get a single artisan by slug
   *
   * @param {Object} args Request arguments.
   * @param {String} args.artisanSlug The slug of the artisan.
   * @param {String} args.recipeSlug The slug of the recipe.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .recipe({ artisanSlug: 'blacksmith', recipeSlug: 'apprentice-flamberge', region: 'us', locale: 'en_US' });
   * // or
   * .recipe({ artisanSlug: 'blacksmith', recipeSlug: 'apprentice-flamberge' });
   * @returns {?String} API link for send an request
   */

  recipe({ artisanSlug, recipeSlug, region = this._options.region, locale = this._options.locale } = {}) {
    if (!artisanSlug || !recipeSlug || typeof artisanSlug !== 'string' || typeof recipeSlug !== 'string') {
      return undefined;
    }
    let nephalem = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).ArtisanAndRecipe.Recipe(artisanSlug, recipeSlug);
  }

  // D3 CHARACTER CLASS AND SKILL API

  /**
   * Get a single character class by slug
   *
   * @param {Object} args Request arguments.
   * @param {String} args.classSlug The slug of the character class.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .characterClass({ classSlug: 'barbarian', region: 'us', locale: 'en_US' });
   * // or
   * .characterClass({ classSlug: 'barbarian' });
   * @returns {?String} API link for send an request
   */

  characterClass({ classSlug, region = this._options.region, locale = this._options.locale } = {}) {
    if (!classSlug || typeof classSlug !== 'string') return undefined;
    let nephalem = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).CharacterClassAndSkill.CharacterClass(classSlug);
  }

  /**
   * Get a single skill by slug, for a specific character class
   *
   * @param {Object} args Request arguments.
   * @param {String} args.classSlug The slug of the character class.
   * @param {String} args.skillSlug The slug of the skill.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .skill({ classSlug: 'barbarian', skillSlug: 'bash', region: 'us', locale: 'en_US' });
   * // or
   * .skill({ classSlug: 'barbarian', skillSlug: 'bash' });
   * @returns {?String} API link for send an request
   */

  skill({ classSlug, skillSlug, region = this._options.region, locale = this._options.locale } = {}) {
    if (!classSlug || !skillSlug || typeof classSlug !== 'string' || typeof skillSlug !== 'string') {
      return undefined;
    }
    let nephalem = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).CharacterClassAndSkill.Skill(classSlug, skillSlug);
  }

  // D3 FOLLOWER API

  /**
   * Get a single follower by slug
   *
   * @param {Object} args Request arguments.
   * @param {String} args.followerSlug The slug of the follower.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .follower({ followerSlug: 'templar', region: 'us', locale: 'en_US' });
   * // or
   * .follower({ followerSlug: 'templar' });
   * @returns {?String} API link for send an request
   */

  follower({ followerSlug, region = this._options.region, locale = this._options.locale } = {}) {
    if (!followerSlug || typeof followerSlug !== 'string') return undefined;
    let nephalem = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Follower(followerSlug);
  }

  // D3 ITEM API

  /**
   * Get a single item by item slug and ID
   *
   * @param {Object} args Request arguments.
   * @param {String} args.itemSlugAndId The slug and ID of the item.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] The locale that should be reflected in localized data.
   * @example
   * .item({ itemSlugAndId: 'itemSlugAndId', region: 'us', locale: 'en_US' });
   * // or
   * .item({ itemSlugAndId: 'corrupted-ashbringer-Unique_Sword_2H_104_x1' });
   * @returns {?String} API link for send an request
   */

  item({ itemSlugAndId, region = this._options.region, locale = this._options.locale } = {}) {
    if (!itemSlugAndId || typeof itemSlugAndId !== 'string') return undefined;
    let nephalem = this._options.getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(nephalem).Item(itemSlugAndId);
  }
}

module.exports = Community;
