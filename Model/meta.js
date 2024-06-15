const mongoose = require('mongoose');

const metaSchema = new mongoose.Schema({
  postId: Number
})

const Meta = mongoose.model('Meta', metaSchema);

module.exports = Meta;