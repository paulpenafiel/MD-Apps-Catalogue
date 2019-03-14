const express = require('express');
const router = express.Router();
const aplicationC=require('../controllers/aplication.controller');


router.get('/all',aplicationC.getAll);
router.get('/', aplicationC.getAplications);
router.post('/', aplicationC.createAplication);
router.get('/:id', aplicationC.getAplication);
router.get('/cat/:cat',aplicationC.getAplicationByCat);
router.put('/:id', aplicationC.editAplication);
router.delete('/:id',aplicationC.deleteAplication);

module.exports= router;