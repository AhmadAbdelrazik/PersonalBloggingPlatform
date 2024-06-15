const express = require('express');
const router = express.Router();

const controller = require('../controller/posts');

// Add a post
router.post('/', controller.addPost);

// Read a post
router.get('/:id', controller.readPost);

// Read the latest posts
router.get('/', controller.readPosts);

// Change a post
router.put('/:id', controller.changePost);

// Delete a post
router.delete('/:id', controller.deletePost);

module.exports = router;