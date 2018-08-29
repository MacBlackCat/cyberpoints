exports.Endpoints = {
  Credentails({ credentail, key, secret }) {
    return {
      FetchToken: () =>
        `${credentail}/oauth/token?grant_type=client_credentials&client_id=${key}&client_secret=${secret}`,
      CheckToken: token => `${credentail}/oauth/check_token?token=${token}`
    };
  }
};
