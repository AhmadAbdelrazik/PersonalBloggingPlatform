const Post = require('../Model/post');
const Meta = require('../Model/meta');
const statusCodes = require('../utils/statusCodes');
const { NotFoundError, ForbiddenError } = require('../utils/baseError');

const  addPost = async function (req, res) {
  // Check if post already exists.
  const checkPost = await Post.findOne({title: req.body.title, author: req.body.author});

  if (checkPost)
    throw new ForbiddenError(`Post already Exists`);

  // Add the post to the database.
  const date = new Date();
  const meta = await Meta.findOne();
  meta.postId = meta.postId + 1;
  const id = meta.postId;
  const post = new Post({
    id: id,
    title: req.body.title,
    author: req.body.author,
    post: req.body.post,
    publishDate: date, 
  });
  
  await post.save();
  await meta.save();
  
  // Send the post id back.
  res.status(statusCodes.success.Accepted).send(`Post Id = ${id}`);
}

const readPost = async function (req, res) {
  // Check if the post in the database.
  const post = await Post.findOne({id: req.id}, {_id: 0, __v: 0});
  console.log(post);

  if (!post)
    throw new NotFoundError(`Post with ID ${req.id} doesn't exist.`);
  
  // Send the post to the user.
  res.send(post);
}

const readPosts = async function (req, res) {
  // Load the last added posts from the database.
  const post = await Post.find({}, {_id: 0, __v: 0}).sort({publishDate: -1}).limit(10);
  
  // Send posts to the user.
  if (post) {
    res.send(post);
  } else {
    res.send(`no Posts yet! `);
  }
}

const changePost = async function (req, res) {
  req.body.lastEdit = new Date();
  // Check if post is in the database and update it if found.
  const checkPost = await Post.findOneAndUpdate({id: req.id}, req.body);

  if (!checkPost) 
    throw new NotFoundError(`Post with ID ${req.id} doesn't exist`);

  // Send the confirmation
  res.status(statusCodes.success.Accepted).send(`Post ${req.id} has been updated`);
}

const deletePost = async function (req, res) {
  // Check if the post is in the database and deletes it if found.
  const checkPost = await Post.findOneAndDelete({id: req.id});

  if (!checkPost) 
    throw new NotFoundError(`Post with ID ${req.id} doesn't exist`);

  // Send the confirmation
  res.status(statusCodes.success.Accepted).send(`Post ${req.id} has been deleted`);
}

module.exports = {
  addPost,
  readPost,
  readPosts,
  changePost,
  deletePost
}