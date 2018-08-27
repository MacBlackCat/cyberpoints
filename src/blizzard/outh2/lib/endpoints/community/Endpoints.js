exports.Endpoints = {
  Community({ root, token }) {
    return {
      Account: () => `${root}/account/user?access_token=${token}`,
      Profile: {
        SC2: () => `${root}/sc2/profile/user?access_token=${token}`,
        WOW: () => `${root}/wow/user/characters?access_token=${token}`
      }
    };
  }
};
