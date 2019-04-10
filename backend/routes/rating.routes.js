const express = require('express');
const router = express.Router();
const ratingC = require('../controllers/rating.controller');

router.post('/newRating', ratingC.createRating);
router.get('/avg/:appId', ratingC.getAverage);

module.exports = router;