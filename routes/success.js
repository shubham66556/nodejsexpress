const path = require('path');

const express = require('express');
const router1 = express.Router();
const productController = require('../controllers/product');
// const rootdir = require('../util/path');
// /admin/add-product => GET
router1.get('/success',productController.getSuccess); 
// /admin/add-product => POST


module.exports = router1;
