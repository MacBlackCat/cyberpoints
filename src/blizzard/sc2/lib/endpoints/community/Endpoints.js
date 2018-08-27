exports.Endpoints = {
  Community({ root, locale, key }) {
    return {
      Profile: {
        Profile: (id, region, name) => `${root}/sc2/profile/${id}/${region}/${name}/?locale=${locale}&apikey=${key}`,
        Ledders: (id, region, name) =>
          `${root}/sc2/profile/${id}/${region}/${name}/ladders?locale=${locale}&apikey=${key}`,
        MatchHistory: (id, region, name) =>
          `${root}/sc2/profile/${id}/${region}/${name}/matches?locale=${locale}&apikey=${key}`
      },
      Ledder: id => `${root}/sc2/ladder/${id}?locale=${locale}&apikey=${key}`,
      Resources: {
        Achievements: () => `${root}/sc2/data/achievements?locale=${locale}&apikey=${key}`,
        Rewards: () => `${root}/sc2/data/rewards?locale=${locale}&apikey=${key}`
      }
    };
  }
};
