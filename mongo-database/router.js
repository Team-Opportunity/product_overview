const express = require('express');
const router = express.Router();
const controller = require('./controllers/entrycontrollers.js');

router.get('/products/:product_id', controller.product.get);

// router.get('/products/:product_id/styles', controller.productstyles.get);

// router.get('/photos/:style_id', controller.photos.get);

// router.get('/skus/:style_id', controller.skus.get);

// router.get('/products/:product_id/related', controller.relatedproducts.get);

// router.get('/relatedproducts', (req, res) => {
//   console.log('route hit')
//   IndexController.getAllProducts((err, allProducts) => {
//     if (err) {
//       res.status(500).send('Could not retrieve products');
//     } else {
//       res.send(allProducts);
//     }
//   })
// })

module.exports = router;