const express = require('express');
const router = express.Router();
const IndexController = require('./controllers.js');

router.get('/relatedproducts', (req, res) => {
  console.log('route hit')
  IndexController.getAllProducts((err, allProducts) => {
    if (err) {
      res.status(500).send('Could not retrieve products');
    } else {
      res.send(allProducts);
    }
  })
})

module.exports = router;