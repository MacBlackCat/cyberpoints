exports.Endpoints = {
  Community({ root, locale, key }) {
    return {
      Achievement: id => `${root}/wow/achievement/${id}?locale=${locale}&apikey=${key}`,
      Auction: realm => `${root}/wow/auction/data/${realm}?locale=${locale}&apikey=${key}`,
      Boss: {
        MasterList: () => `${root}/wow/boss/?locale=${locale}&apikey=${key}`,
        Boss: bossId => `${root}/wow/boss/${bossId}?locale=${locale}&apikey=${key}`
      },
      Challenge: {
        RealmLeaderBoard: realm => `${root}/wow/challenge/${realm}?locale=${locale}&apikey=${key}`,
        RegionLeaderBorad: () => `${root}/wow/challenge/region?locale=${locale}&apikey=${key}`
      },
      Character: {
        Profile: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Achievements: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Appearance: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Feed: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Guild: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        HunterPets: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Items: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Mounts: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Pets: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        PetStlots: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Professions: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Progression: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Pvp: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Quests: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Reputation: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Statistics: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Stats: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Talents: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Titles: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Audit: (realm, characterName, fields) =>
          `${root}/wow/character/${realm}/${characterName}?fields=${fields}&locale=${locale}&apikey=${key}`
      },
      Guild: {
        Profile: (realm, guildName, fields) =>
          `${root}/wow/guild/${realm}/${guildName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Members: (realm, guildName, fields) =>
          `${root}/wow/guild/${realm}/${guildName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Achievements: (realm, guildName, fields) =>
          `${root}/wow/guild/${realm}/${guildName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        News: (realm, guildName, fields) =>
          `${root}/wow/guild/${realm}/${guildName}?fields=${fields}&locale=${locale}&apikey=${key}`,
        Challenge: (realm, guildName, fields) =>
          `${root}/wow/guild/${realm}/${guildName}?fields=${fields}&locale=${locale}&apikey=${key}`
      },
      Item: {
        Item: itemId => `${root}/wow/item/${itemId}?locale=${locale}&apikey=${key}`,
        ItemSet: setId => `${root}/wow/item/set/${setId}?locale=${locale}&apikey=${key}`
      },
      Mount: () => `${root}/wow/mount/?locale=${locale}&apikey=${key}`,
      Pet: {
        MasterList: () => `${root}/wow/pet/?locale=${locale}&apikey=${key}`,
        Abilities: abilityId => `${root}/wow/pet/ability/${abilityId}?locale=${locale}&apikey=${key}`,
        Species: speciesId => `${root}/wow/pet/species/${speciesId}?locale=${locale}&apikey=${key}`,
        Stats: (speciesId, level, breedId, qualityId) =>
          `${root}/wow/pet/stats/${speciesId}?level=${level}&breedId=${breedId}&qualityId=${qualityId}&locale=${locale}&apikey=${key}` // eslint-disable-line max-len
      },
      Pvp: bracket => `${root}/wow/leaderboard/${bracket}?locale=e${locale}&apikey=${key}`,
      Quest: questId => `${root}/wow/quest/${questId}?locale=${locale}&apikey=${key}`,
      RealmStatus: () => `${root}/wow/realm/status?locale=${locale}&apikey=${key}`,
      Recipe: recipeId => `${root}/wow/recipe/${recipeId}?locale=${locale}&apikey=${key}`,
      Spell: spellId => `${root}/wow/spell/${spellId}?locale=${locale}&apikey=${key}`,
      Resources: {
        BattleGroups: () => `${root}/wow/data/battlegroups/?locale=${locale}&apikey=${key}`,
        CharacterRaces: () => `${root}/wow/data/character/races?locale=${locale}&apikey=${key}`,
        CharacterClasses: () => `${root}/wow/data/character/classes?locale=${locale}&apikey=${key}`,
        CharacterAchievements: () => `${root}/wow/data/character/achievements?locale=${locale}&apikey=${key}`,
        GuildRewards: () => `${root}/wow/data/guild/rewards?locale=${locale}&apikey=${key}`,
        GuildPerks: () => `${root}/wow/data/guild/perks?locale=${locale}&apikey=${key}`,
        GuildAchievements: () => `${root}/wow/data/guild/achievements?locale=${locale}&apikey=${key}`,
        ItemClasses: () => `${root}/wow/data/item/classes?locale=${locale}&apikey=${key}`,
        Talents: () => `${root}/wow/data/talents?locale=${locale}&apikey=${key}`,
        PetTypes: () => `${root}/wow/data/pet/types?locale=${locale}&apikey=${key}`
      },
      Zone: {
        MasterList: () => `${root}/wow/zone/?locale=${locale}&apikey=${key}`,
        Zone: zoneId => `${root}/wow/zone/${zoneId}?locale=${locale}&apikey=${key}`
      }
    };
  }
};
