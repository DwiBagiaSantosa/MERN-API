const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const blogController = require('../controllers/blog')

// [POST] : /v1/blog/post
router.post('/post', [
    body('title').isLength({min: 5}).withMessage('Input minimal 5 character'), 
    body('body').isLength({min: 5}).withMessage('Input minimal 5 character')], 
    blogController.createBlogPost)

module.exports = router;