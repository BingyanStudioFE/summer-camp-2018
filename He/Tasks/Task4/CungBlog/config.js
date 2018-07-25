const jwtConfig = {
  payload: {
    user: "Cung"
  },
  secret: "myJWT",
  options: {
    expiresIn: 5 * 24 * 60 * 60
  }
};

module.exports = {
  jwtConfig,
  userPassword: "Hejianchong"
};
