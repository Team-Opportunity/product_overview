const router = require('express').Router();
const controller = require('./queryControllers.js');

router.get('/products/:product_id', controller.getProduct.get);

router.get('/products/:feature_id/features', controller.getProductFeatures);

router.get('/products/:product_id/styles', controller.getProductStyles);

// router.get('/photos/:style_id', controller.getPhotos);

router.get('/skus/:style_id', controller.getSkus);

router.get('/products/:product_id/related', controller.getRelatedProducts);

module.exports = router;