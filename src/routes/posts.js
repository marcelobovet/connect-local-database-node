const express = require('express');
const router = express.Router()
const postsServices = require('../services/posts');

router.post('/', postsServices.addPost);
router.get('/', postsServices.getPost);



module.exports = router;