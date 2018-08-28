const Util = require('../util/main');

const Def = {
  region: 'eu',
  locale: 'en_GB'
};

const Roots = [
  {
    region: 'us',
    hostname: 'https://us.api.battle.net',
    credentail: 'https://us.battle.net',
    mainLocale: 'en_US',
    locales: ['en_US', 'es_MX', 'pt_BR']
  },
  {
    region: 'eu',
    hostname: 'https://eu.api.battle.net',
    credentail: 'https://eu.battle.net',
    mainLocale: 'en_GB',
    locales: ['de_DE', 'en_GB', 'es_ES', 'es_MX', 'fr_FR', 'it_IT', 'ru_RU', 'pl_PL', 'pt_PT']
  },
  {
    region: 'sea',
    hostname: 'https://sea.api.battle.net',
    credentail: 'https://eu.battle.net/',
    mainLocale: 'en_US',
    locales: ['en_US']
  },
  {
    region: 'kr',
    hostname: 'https://kr.api.battle.net',
    credentail: 'https://kr.battle.net',
    mainLocale: 'ko_KR',
    locales: ['ko_KR', 'en_GB', 'en_US', 'ru_RU']
  },
  {
    region: 'tw',
    hostname: 'https://tw.api.battle.net',
    credentail: 'https://apac.battle.net',
    mainLocale: 'zh_TW',
    locales: ['zh_TW', 'en_GB', 'en_US']
  },
  {
    region: 'cn',
    hostname: 'https://api.battlenet.com.cn',
    credentail: 'https://www.battlenet.com.cn',
    mainLocale: 'zh_CN',
    locales: ['zh_CN', 'en_GB', 'en_US']
  }
];

exports.Brackets = ['2v2', '3v3', '5v5', 'rgb'];

exports.Token = {
  validate(given) {
    if (!given || !given.key || typeof given.key !== 'string') {
      throw new TypeError('INVALID_ACCESS_SETTINGS', 'key', 'API key Invalid');
    }
    if (!given.secret || typeof given.secret !== 'string') {
      throw new TypeError('INVALID_ACCESS_SETTINGS', 'secret', 'API Client Secret Invalid');
    }
    return Util._mergeDefault(Def, given);
  }
};

exports.getRoot = ({ region, locale, key, token, secret }) => {
  const rootData = Util._selectRoot(region, Roots);
  return Object.assign(
    {},
    { region: rootData.region },
    { root: rootData.hostname },
    { credentail: rootData.credentail },
    { locale: rootData.locales.find(l => l === locale) || rootData.mainLocale },
    { secret: secret ? secret : null },
    { key: key ? key : null },
    { token: token ? token : null }
  );
};
