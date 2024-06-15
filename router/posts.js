const express = require('express');
const router = express.Router();
const postValidate = require('../Middleware/validator');
const params = require('../Middleware/Params');
const controller = require('../controller/posts');

// id parameter
router.param('id', params.id);

// Add a post
router.post('/',postValidate, controller.addPost);

// Read the latest posts
router.get('/', controller.readPosts);

// Read a post
router.get('/:id', controller.readPost);

// Change a post
router.put('/:id', postValidate, controller.changePost);

// Delete a post
router.delete('/:id', controller.deletePost);

module.exports = router;