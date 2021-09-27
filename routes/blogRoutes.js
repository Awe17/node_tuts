
const express = require('express');
const router  = express.Router();
const blogController = require('../contollers/blogController');

// routes to create page
router.get('/create', blogController.blog_create_get)


// routes to /
router.route('/')
.get(blogController.blog_index)
.post(blogController.blog_create_post)


// routes to /:id
router.route('/:id')
.get(blogController.blog_details)
.delete(blogController.blog_delete)


module.exports = router;