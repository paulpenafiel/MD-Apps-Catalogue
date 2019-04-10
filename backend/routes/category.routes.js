const express = require('express');
const router = express.Router();
const categoryC=require('../controllers/category.controller');

router.post('/', categoryC.createCategory);
router.get('/:name', categoryC.getCategory);

module.exports= router;