const mongo = require('./index.js');
const models = require('./schemas.js');

const getProductData = callback => {
  models.Product.find({product_id: 5},(err, productData) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, productData);
    }
  })
}

module.exports = {
  getProductData
};