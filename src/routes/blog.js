const express = require('express')
const {body} = require('express-validator')
const router = express.Router()
const blogController = require('../controllers/blog')

router.post('/post', [
    body('title').isLength({min: 5}).withMessage('input title tidak sesuai'), 
    body('body').isLength({min: 5}).withMessage('input body tidak sesuai')],
    blogController.createBlogPost);
router.get('/posts', blogController.getAllBlogPost);
router.get('/post/:postId', blogController.getBlogPostById);
router.delete('/post/:postId', blogController.deleteBlogPost);
router.put('/post/:postId', [
    body('title').isLength({min: 5}).withMessage('input title tidak sesuai'), 
    body('body').isLength({min: 5}).withMessage('input body tidak sesuai')],
    blogController.updateBlogPost);

module.exports = router