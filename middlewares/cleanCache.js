const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
  // run this middleware after the request handler
  await next();

  clearHash(req.user.id);
};
