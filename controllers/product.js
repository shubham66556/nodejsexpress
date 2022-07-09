const path = require('path');

const rootdir = require('../util/path');



exports.getAddproduct=(req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
  };


   exports.postAddproducts = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  };

  exports.getProducts =(req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'shop.html'));
  };

  exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'Contactus.html'));
  };

  exports.postContact = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
  };

  exports.getSuccess= (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'success.html'));
  };