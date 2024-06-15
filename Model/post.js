const mongoose = require('mongoose');

// title, author, post, added time, last edited.

const postSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String, 
    maxLength: 100,
    required: true,
  },
  author: {
    type: String,
    maxLength: 40,
    required: true,
  },
  post: {
    type: String,
    maxLength: 10000,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  lastEdit: {
    type: Date,
  }
})

const Post = mongoose.model('posts', postSchema);

module.exports = Post;