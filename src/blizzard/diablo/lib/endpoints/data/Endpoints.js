exports.Endpoints = {
  Data({ root, token }) {
    return {
      Season: {
        Index: () => `${root}/data/d3/season/?access_token=${token}`,
        Season: id => `${root}/data/d3/season/${id}?access_token=${token}`,
        Leaderboard: (id, leaderboard) =>
          `${root}/data/d3/season/${id}/leaderboard/${leaderboard}?access_token=${token}`
      },
      Era: {
        Index: () => `${root}/data/d3/era/?access_token=${token}`,
        Era: id => `${root}/data/d3/era/${id}?access_token=${token}`,
        Leaderboard: (id, leaderboard) => `${root}/data/d3/era/${id}/leaderboard/${leaderboard}?access_token=${token}`
      }
    };
  }
};
