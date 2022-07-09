const path = require('path');

const express = require('express');

const router = express.Router();
const productController = require('../controllers/product');
// const rootdir = require('../util/path');

router.get('/',productController.getProducts);

module.exports = router;
