const express = require('express');
const router = express.Router();
const downloadC = require('../controllers/download.controller');

router.get('/', downloadC.getDownloads);
router.post('/newDownload',downloadC.createDownload);
router.get('/:appId', downloadC.countByApp);
router.get('/byUser/:userId', downloadC.getDownloadByUser);

module.exports = router;