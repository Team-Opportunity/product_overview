const express = require('express');
const router = express.Router();
const controller = require('./queryControllers.js');

router.get('/products/:product_id', controller.getProduct);

// router.get('/products/:product_id/styles', controller.productstyles.get);

// router.get('/photos/:style_id', controller.photos.get);

// router.get('/skus/:style_id', controller.skus.get);

// router.get('/products/:product_id/related', controller.relatedproducts.get);

module.exports = router;