const statusCodes = require('../utils/statusCodes');

const errorHandler = function (err, req, res, next) {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res
    .status(statusCodes.clientError.BadRequest)
    .json({error: 'invalid JSON format'});
  }
  else {
    return res
    .status(statusCodes.serverError.InternalServerError)
    .json({error: 'Internal Server Error'});
  }
}

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Bad JSON');
    return res.status(400).json({ error: 'Invalid JSON format' });
  }
  next();
});