const statusCodes = require('../utils/statusCodes');

const id = function (req, res, next, id) {
  if (isNaN(id)) {
    res.status(statusCodes.clientError.BadRequest).send(`invalid id`);
    return ;
  }

  req.id = id;  
  next();
}

module.exports = {
  id
}