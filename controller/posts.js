const Post = require('../Model/post');
const statusCodes = require('../utils/statusCodes');

const  addPost = async function (req, res) {
  // Add the post to the database.
  const date = new Date();
  const id = await Post.countDocuments();
  
  const post = new Post({
    id: id + 1,
    title: req.body.title,
    author: req.body.author,
    post: req.body.post,
    publishDate: date, 
  });
  
  await post.save();
  // Send the post id back.

  res.status(statusCodes.success.Accepted).send(`Post Id = ${id + 1}`);
}

const readPost = async function (req, res) {
  // Check if the post in the database.
  const post = await Post.findOne({id: req.id});

  if (!post) {
    res.status(statusCodes.clientError.NotFound);
    return;
  }
  
  // Send the post to the user.
  res.send(post);
}

const readPosts = async function (req, res) {
  // Load the last added posts from the database.
  const post = await Post.find().sort({publishDate: 1}).limit(10);
  
  // Send posts to the user.
  if (post) {
    res.send(post);
  } else {
    res.send(`no Posts yet! `);
  }
}

const changePost = async function (req, res) {
  // Check if the post is in the database.
  // Update the post
  // Send the confirmation or error
}

const deletePost = async function (req, res) {
  // Check if the post is in the database.
  // Delete the post from the database.
  // Send the confirmation or error
}

module.exports = {
  addPost,
  readPost,
  readPosts,
  changePost,
  deletePost
}