const mongo = require('./index.js');
const models = require('./queryModels.js');
// const axios = require('axios');

const getProduct = function(req, res) {
  models.getProductData((err, results) => {
    console.log(results);
    if (err) {
      res.status(500).send(err)
    } else res.status(200).send(results);
  })
}



module.exports = {
  getProduct
}