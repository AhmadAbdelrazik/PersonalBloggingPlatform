const  addPost = function (req, res) {
  // Add the post to the database.
}

const readPost = function (req, res) {
  // Check if the post in the database.
  // Send the post to the database.
}

const readPosts = function (req, res) {
  // Load the last added posts from the database.
  // Send posts to the database.
}

const changePost = function (req, res) {
  // Check if the post is in the database.
  // Update the post
  // Send the confirmation or error
}

const deletePost = function (req, res) {
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