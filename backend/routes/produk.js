const express = require('express');
const router = express.Router();
const produk = require('../controllers/produk.controller.js')
const handleUpload = require('../libs/handleUpload.js');
const Validation = require('../validation/produk/produk.validation.js');

router.get('/', produk.findAll);
router.get('/:id', produk.findOne);
router.post('/', handleUpload.single('image'), Validation.createProduk, produk.create);
router.put('/:id', handleUpload.single('image'), Validation.createProduk, produk.update);
router.delete('/:id', produk.delete);

module.exports = router;