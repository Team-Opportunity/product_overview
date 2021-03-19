const mongo = require('../index.js');
const models = require('../schemas.js');


module.exports = {
  getProduct: callback => {
    console.log('does it reach me now?') //success on postman
    console.log(models.Product);
    models.Product.find({product_id: 5},(err, productData) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, productData);
      }
    })
  }
};