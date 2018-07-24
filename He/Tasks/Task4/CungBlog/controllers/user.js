const jwt = require('jsonwebtoken');

const {
  jwtConfig,
  userPassword
} = require('../config');

const login = async (ctx, next) => {
  let {
    password
  } = ctx.request.body;
  if (password === userPassword) {
    ctx.body.data.success = 1;
    let token = jwt.sign(jwtConfig.payload, jwtConfig.secret, jwtConfig.options);
    ctx.set('Authorization', token);
  } 
};

module.exports = {
  login
};
