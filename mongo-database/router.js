const router = require('express').Router();
const controller = require('./queryControllers.js');

router.get('/products/:product_id', controller.getProduct.get);

router.get('/products/:product_id/styles', controller.getProductStyles.get);

router.get('/products/:product_id/related', controller.getRelatedProducts);

module.exports = router;