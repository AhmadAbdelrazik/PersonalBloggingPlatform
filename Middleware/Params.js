const statusCodes = require('../utils/statusCodes');

const id = function (req, res, next, id) {
  if (typeof id === "number")
    next();
  else
    res.status(statusCodes.clientError.BadRequest).send(`invalid id`);
}

module.exports = {
  id
}