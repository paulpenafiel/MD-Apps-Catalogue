const express = require('express');
const router = express.Router();
const commentC = require('../controllers/commentary.controller');

router.get('/', commentC.getComments);
router.post('/newComment', commentC.createComment);
router.get('/:appId', commentC.getCommentsByApp);
router.get('/byUser/:userId', commentC.getCommentsByUser);
router.put('/:id',commentC.editComment);
router.put('/ban/:id',commentC.banComment);
router.put('/allow/:id',commentC.allowComment);
router.put('/reply/:id',commentC.addReply);

module.exports = router;