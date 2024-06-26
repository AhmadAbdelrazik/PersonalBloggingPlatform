const { NotFoundError, ForbiddenError } = require("../utils/baseError");
const statusCodes = require("../utils/statusCodes");

const errorHandler = function (err, req, res, next) {
  console.log(err);

  // Invalid JSON format
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res
      .status(statusCodes.clientError.BadRequest)
      .json({ error: "invalid JSON format" });
  } else if (err instanceof NotFoundError) {
    return res.status(err.statusCode).json({error: err.message});
  } else if (err instanceof ForbiddenError) {
    return res.status(err.statusCode).json({error: err.message});
  }

  // Default
  res
    .status(statusCodes.serverError.InternalServerError)
    .json({ error: "Internal Server Error" });
};

module.exports = errorHandler;