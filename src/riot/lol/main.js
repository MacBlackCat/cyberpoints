'use strict';

const { Endpoints } = require('./lib/endpoints/Endpoints');
const Util = require('./utils/Util');

class LeagueOfLegends {
  constructor(options) {
    this._options = Util._validateOptions(options);
  }

  // LOL-STATUS-V3

  status({ region = this._options.region } = {}) {
    if (!region || typeof region !== 'string') return undefined;
    let nerf = this._options.getRoot({ region, key: this._options.key });
    return Endpoints.Core(nerf).LolStatus();
  }

  // THIRD-PARTY-CODE-V3

  thirdParty({ summonderId, region = this._options.region } = {}) {
    if (!summonderId || !region || isNaN(parseInt(summonderId)) || typeof region !== 'string') return undefined;
    let nerf = this._options.getRoot({ region, key: this._options.key });
    return Endpoints.Core(nerf).ThirdParty(summonderId);
  }
}

module.exports = LeagueOfLegends;
