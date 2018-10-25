exports.Endpoints = {
  Core({ root, key }) {
    return {
      ChampionMastery: {
        All: summonerId =>
          `${root}/lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerId}?api_key=${key}`,
        Spesific: (summonerId, championId) =>
          `${root}/lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerId}/by-champion/${championId}?api_key=${key}`, // eslint-disable-line max-len
        Total: summonerId => `${root}/lol/champion-mastery/v3/scores/by-summoner/${summonerId}?api_key=${key}`
      },
      Champion: {
        Rotations: () => `${root}/lol/platform/v3/champion-rotations?api_key=${key}`,
        All: () => `${root}/lol/platform/v3/champions?api_key=${key}`,
        Spesific: id => `${root}/lol/platform/v3/champions/${id}?api_key=${key}`
      },
      League: {
        Challenger: queue => `${root}/lol/league/v3/challengerleagues/by-queue/${queue}?api_key=${key}`,
        League: leagueId => `${root}/lol/league/v3/leagues/${leagueId}?api_key=${key}`,
        Master: queue => `${root}/lol/league/v3/masterleagues/by-queue/${queue}?api_key=${key}`,
        Positions: summonerId => `${root}/lol/league/v3/positions/by-summoner/${summonerId}?api_key=${key}`
      },
      LolStatus: () => `${root}/lol/status/v3/shard-data?api_key=${key}`,
      Match: {
        Matches: matchId => `${root}/lol/match/v3/matches/${matchId}?api_key=${key}`,
        MatchList: accountId => `${root}/lol/match/v3/matchlists/by-account/${accountId}?api_key=${key}`,
        Timelines: matchId => `${root}/lol/match/v3/timelines/by-match/${matchId}?api_key=${key}`,
        TournamentCode: tournamentCode =>
          `${root}/lol/match/v3/matches/by-tournament-code/${tournamentCode}/ids?api_key=${key}`
      },
      Spectator: {
        ActiveGames: summonerId => `${root}/lol/spectator/v3/active-games/by-summoner/${summonerId}?api_key=${key}`,
        FeaturedGames: () => `${root}/lol/spectator/v3/featured-games?api_key=${key}`
      },
      Summoner: {
        AccountId: accountId => `${root}/lol/summoner/v3/summoners/by-account/${accountId}?api_key=${key}`,
        Name: summonerName => `${root}/lol/summoner/v3/summoners/by-name/${summonerName}?api_key=${key}`,
        Id: summonerId => `${root}/lol/summoner/v3/summoners/${summonerId}?api_key=${key}`
      },
      ThirdParty: summonerId => `${root}/lol/platform/v3/third-party-code/by-summoner/${summonerId}?api_key=${key}`
    };
  }
};
