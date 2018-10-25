exports.Endpoints = {
  Data({ root, region, locale, token }) {
    return {
      ConnectedRealm: {
        Index: () =>
          `${root}/data/wow/connected-realm/?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        ConnectedRealm: connectedRalmId =>
          `${root}/data/wow/connected-realm/${connectedRalmId}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}` // eslint-disable-line max-len
      },
      Keystone: {
        Index: connectedRalmId =>
          `${root}/data/wow/connected-realm/${connectedRalmId}/mythic-leaderboard/?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`, // eslint-disable-line max-len
        Leaderboard: (connectedRalmId, dungeonId, period) =>
          `${root}/data/wow/connected-realm/${connectedRalmId}/mythic-leaderboard/${dungeonId}/period/${period}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}` // eslint-disable-line max-len
      },
      Raid: (raid, faction) => `${root}/data/wow/leaderboard/hall-of-fame/${raid}/${faction}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`, // eslint-disable-line max-len
      MythicChallenge: () =>
        `${root}/data/wow/mythic-challenge-mode/?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
      PlayableClass: {
        Index: () =>
          `${root}/data/wow/playable-class/?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        PlayableClass: classId =>
          `${root}/data/wow/playable-class/${classId}?namespace=static-${region}&locale=${locale}&access_token=${token}`
      },
      Realm: {
        Index: () => `${root}/data/wow/realm/?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        Realm: realmSlug =>
          `${root}/data/wow/realm/${realmSlug}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`
      },
      Region: {
        Index: () => `${root}/data/wow/region/?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`,
        Region: regionId =>
          `${root}/data/wow/region/${regionId}?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`
      },
      Specialization: {
        Index: () =>
          `${root}/data/wow/playable-specialization/?namespace=static-${region}&locale=${locale}&access_token=${token}`,
        Specialization: specId =>
          `${root}/data/wow/playable-specialization/${specId}?namespace=static-${region}&locale=${locale}&access_token=${token}` // eslint-disable-line max-len
      },
      Token: () => `${root}/data/wow/token/?namespace=dynamic-${region}&locale=${locale}&access_token=${token}`
    };
  }
};
