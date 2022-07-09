const path = require('path');

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
// const rootdir = require('../util/path');
// /admin/add-product => GET
router.get('/Contactus', productController.getContact);

router.post('/Contactus', productController.postContact);

module.exports = router;
