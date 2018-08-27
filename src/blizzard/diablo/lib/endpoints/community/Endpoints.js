exports.Endpoints = {
  Community({ root, locale, key }) {
    return {
      Act: {
        Index: () => `${root}/d3/data/act?locale=${locale}&apikey=${key}`,
        Act: actId => `${root}/d3/data/act/${actId}?locale=${locale}&apikey=${key}`
      },
      ArtisanAndRecipe: {
        Artisan: artisanSlug => `${root}/d3/data/artisan/${artisanSlug}?locale=${locale}&apikey=${key}`,
        Recipe: (artisanSlug, recipeSlug) =>
          `${root}/d3/data/artisan/${artisanSlug}/recipe/${recipeSlug}?locale=${locale}&apikey=${key}`
      },
      Follower: followerSlug => `${root}/d3/data/follower/${followerSlug}?locale=${locale}&apikey=${key}`,
      CharacterClassAndSkill: {
        CharacterClass: classSlug => `${root}/d3/data/hero/${classSlug}?locale=${locale}&apikey=${key}`,
        Skill: (classSlug, skillSlug) =>
          `${root}/d3/data/hero/${classSlug}/skill/${skillSlug}?locale=${locale}&apikey=${key}`
      },
      ItemType: {
        Index: () => `${root}/d3/data/item-type?locale=${locale}&apikey=${key}`,
        ItemType: itemTypeSlug => `${root}/d3/data/item-type/${itemTypeSlug}?locale=${locale}&apikey=${key}`
      },
      Item: itemSlugAndId => `${root}/d3/data/item/${itemSlugAndId}?locale=${locale}&apikey=${key}`,
      Profile: {
        Account: account => `${root}/d3/profile/${account}/?locale=${locale}&apikey=${key}`,
        Hero: (account, heroId) => `${root}/d3/profile/${account}/hero/${heroId}?locale=${locale}&apikey=${key}`,
        DetailedHeroItems: (account, heroId) =>
          `${root}/d3/profile/${account}/hero/${heroId}/items?locale=${locale}&apikey=${key}`,
        DetailedFolloweItems: (account, heroId) =>
          `${root}/d3/profile/${account}/hero/${heroId}/follower-items?locale=${locale}&apikey=${key}`
      }
    };
  }
};
