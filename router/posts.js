const express = require('express');
const router = express.Router();
const postValidate = require('../Middleware/validator');
const params = require('../Middleware/Params');
const controller = require('../controller/posts');
const asyncHandler = require('../utils/asyncHandler')

// id parameter
router.param('id', params.id);

// Add a post
router.post('/',postValidate, asyncHandler(controller.addPost));

// Read the latest posts
router.get('/', asyncHandler(controller.readPosts));

// Read a post
router.get('/:id', asyncHandler(controller.readPost));

// Change a post
router.put('/:id', postValidate, asyncHandler(controller.changePost));

// Delete a post
router.delete('/:id', asyncHandler(controller.deletePost));

module.exports = router;