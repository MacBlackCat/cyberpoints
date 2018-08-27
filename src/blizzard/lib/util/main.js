'use strict';

const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

class Util {
  constructor() {
    throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
  }

  static _mergeDefault(def, given) {
    if (!given) return def;
    for (const key in def) {
      if (!has(given, key) || given[key] === undefined) {
        given[key] = def[key];
      } else if (given[key] === Object(given[key])) {
        given[key] = this._mergeDefault(def[key], given[key]);
      }
    }
    return given;
  }

  static _selectRoot(region, roots) {
    const Roots = new Map();
    for (const root of roots) Roots.set(root.region, root);
    return Roots.get(region);
  }
}

module.exports = Util;
