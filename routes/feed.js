const express = require('express');
const router = express.Router();

const feedController = require('../controller/feed');

router.get('/posts',feedController.getPosts);
router.post('/posts',feedController.createPosts);

module.exports = router;