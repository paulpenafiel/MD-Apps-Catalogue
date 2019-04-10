const express = require('express');
const router = express.Router();
const newC = require('../controllers/new.controller');

router.get('/', newC.getNews);
router.post('/newPost', newC.createNew);
router.get('/last',newC.getLastNews);
router.delete('/:id',newC.deletePost);
module.exports = router;