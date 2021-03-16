const schemas = require('./mongo.js');

const getAllProducts = (callback) => {
  schemas.productModel.find((err, results) => {
    if (err) {
      console.log('error', err);
      callback(err, null)
    } else {
      callback(null, results);
    }
  })
};

module.exports = {
  getAllProducts
}