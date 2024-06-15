const Post = require('../Model/post');
const statusCodes = require('../utils/statusCodes');

const  addPost = async function (req, res) {
  // Check if post already exists.
  const checkPost = await Post.findOne({title: req.body.title, author: req.body.author});

  if (checkPost) {
    console.log(checkPost);
    res.status(statusCodes.clientError.Forbidden).send(`Post already exists`);
    return ;
  }

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
  const post = await Post.findOne({id: req.id}, {_id: 0, __v: 0});

  if (!post) {
    res.status(statusCodes.clientError.NotFound);
    return;
  }
  
  // Send the post to the user.
  res.send(post);
}

const readPosts = async function (req, res) {
  // Load the last added posts from the database.
  const post = await Post.find({}, {_id: 0, __v: 0}).sort({publishDate: 1}).limit(10);
  
  // Send posts to the user.
  if (post) {
    res.send(post);
  } else {
    res.send(`no Posts yet! `);
  }
}

const changePost = async function (req, res) {
  // Check if post is in the database and update it if found.
  const checkPost = await Post.findOneAndUpdate({id: req.id}, req.body);

  if (!checkPost) {
    res.status(statusCodes.clientError.NotFound).send(`Post doesn't exists`);
    return ;
  }
  // Send the confirmation or error
  res.status(statusCodes.success.Accepted).send(`Post ${req.id} has been updated`);
}

const deletePost = async function (req, res) {
  // Check if the post is in the database and deletes it if found.
  const checkPost = await Post.findOneAndDelete({title: req.body.title, author: req.body.author});

  if (!checkPost) {
    res.status(statusCodes.clientError.NotFound).send(`Post doesn't exists`);
    return ;
  }
  // Send the confirmation or error
  res.status(statusCodes.success.Accepted).send(`Post ${req.id} has been deleted`);
}

module.exports = {
  addPost,
  readPost,
  readPosts,
  changePost,
  deletePost
}