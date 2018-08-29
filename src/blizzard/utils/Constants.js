exports.Def = {
  region: 'eu',
  locale: 'en_GB'
};

exports.Roots = [
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
