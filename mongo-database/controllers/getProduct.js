const mongo = require('../index.js');
const models = require('../models/entrymodels.js');
const axios = require('axios');

// axios.get('/products/:product/id')
//   .then(() => console.log('does it reach here'))


// console.log('does it reach me in getproduct'); //success
module.exports = {
  get: function(req, res) {
    models.product.getProduct((err, results) => {
      console.log('does it reach me');
      console.log(results);
      if (err) {
        res.status(500).send(err)
      } else res.status(200).send(results);
    })
  }
}