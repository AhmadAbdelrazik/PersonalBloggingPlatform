const validate = require('../schemas/postSchema');
const statusCodes = require('../utils/statusCodes');

const validatePost = function (req, res, next) {
  const valid = validate(req.body);

  if (!valid)
    res.status(statusCodes.clientError.BadRequest).send(validate.errors);
  else
    next();
  
} 

module.exports = validatePost;