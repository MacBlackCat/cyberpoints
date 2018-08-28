'use strict';

const { getRoot } = require('../../../lib/util/Constants');
const { Endpoints } = require('../../lib/endpoints/community/Endpoints');

class Pet {
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

  // PET API

  /**
   * A list of all supported battle and vanity pets.
   *
   * @param {Object} args Request arguments.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .list();
   * // or
   * .list({ region: 'us', locale: 'en_US'});
   * @returns {?String} API link for send an request
   */

  list({ region = this._options.region, locale = this._options.locale } = {}) {
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Pet.MasterList();
  }

  /**
   * This provides data about a individual battle pet ability ID.
   * We do not provide the tooltip for the ability yet. We are working on a
   * better way to provide this since it depends on your pet's species,
   * level and quality rolls.
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.abilityId The ID of the ability you want to retrieve.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .abilities({ abilityId: 640 });
   * // or
   * .abilities({ abilityId: '640', region: 'us', locale: 'en_US' });
   * @returns {?String} API link for send an request
   */

  abilities({ abilityId, region = this._options.region, locale = this._options.locale } = {}) {
    if (!abilityId || isNaN(parseInt(abilityId))) return undefined;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Pet.Abilities(abilityId);
  }

  /**
   * This provides the data about an individual pet species.
   * The species IDs can be found your character profile using the
   * options pets field. Each species also has data about what it's 6 abilities are.
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.speciesId The species you want to retrieve data on.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .species({ speciesId: 258 });
   * // or
   * .species({ speciesId: '258', region: 'eu', locale: 'en_GB' });
   * @returns {?String} API link for send an request
   */

  species({ speciesId, region = this._options.region, locale = this._options.locae } = {}) {
    if (!speciesId || isNaN(parseInt(speciesId))) return undefined;
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Pet.Species(speciesId);
  }

  /**
   * Retrieve detailed information about a given species of pet.
   *
   * @param {Object} args Request arguments.
   * @param {String|Number} args.speciesId The species you want to retrieve data on.
   * @param {String|Number} [args.level=1] The pet's level. Pet levels max out at 25.
   * If omitted the API assumes a default value of 1.
   * @param {String|Number} [args.breedId=3] The pet's breed. Retrievable via the Character
   * Profile API. If omitted the API assumes a default value of 3.
   * @param {String|Number} [args.qualityId=1] The pet's quality. Retrievable via the Character
   * Profile API. Pet quality can range from 0 to 5 (0 is poor quality and 5 is legendary).
   * If omitted the API will assume a default value of 1.
   * @param {String} [args.region=eu] The region.
   * @param {String} [args.locale=en_GB] What locale to use in the response.
   * @example
   * .stats({ speciesId: 258, level: '7', breedId: 3, qualityId: '5' });
   * <warn>If you pass any parameter, this method merges your
   * request link with the default values.</warn>
   * @returns {?String} API link for send an request
   */

  stats({
    speciesId,
    level = 1,
    breedId = 3,
    qualityId = 1,
    region = this._options.region,
    locale = this._options.locale
  } = {}) {
    if (
      !speciesId ||
      isNaN(parseInt(speciesId)) ||
      isNaN(parseInt(level)) ||
      parseInt(level) < 1 ||
      parseInt(level) > 25 ||
      isNaN(parseInt(breedId)) ||
      isNaN(parseInt(qualityId)) ||
      parseInt(qualityId) > 5 ||
      parseInt(qualityId) < 0
    ) {
      return undefined;
    }
    let core = getRoot({ region, locale, key: this._options.key });
    return Endpoints.Community(core).Pet.Stats(speciesId, level, breedId, qualityId);
  }
}

module.exports = Pet;
