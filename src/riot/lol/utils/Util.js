const { Def, Roots } = require('./Constants');
const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

class Util {
  constructor() {
    throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
  }

  /**
   * Sets default properties on an object that aren't already specified.
   * @param {Object} def Default properties
   * @param {Object} given Object to assign defaults to
   * @returns {Object}
   * @private
   */
  static _mergeDefault(def, given) {
    if (!given) return def;
    for (const key in def) {
      if (!has(given, key) || given[key] === undefined) {
        given[key] = def[key];
      } else if (given[key] === Object(given[key])) {
        given[key] = Util._mergeDefault(def[key], given[key]);
      }
    }

    return Object.assign(given, { getRoot: val => Util.getRoot(val) });
  }

  static _validateOptions(given) {
    if (!given || !given.key || typeof given.key !== 'string') {
      throw new TypeError('INVALID_ACCESS_SETTINGS', 'key', 'API key Invalid');
    }
    return Util._mergeDefault(Def, given);
  }

  static _selectRoot(region, roots) {
    const alls = new Map();
    for (const root of roots) alls.set(root.region, root);
    return alls.get(region);
  }

  static getRoot({ region, key }) {
    const rootData = Util._selectRoot(region, Roots);
    return Object.assign({}, { root: rootData.hostname }, { key });
  }
}

module.exports = Util;
