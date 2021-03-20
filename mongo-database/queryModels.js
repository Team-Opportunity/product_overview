const mongo = require('./index.js');
const models = require('./schemas.js');

//need to pass down a particular product_id here
const getProductData = callback => {
  models.Product.find({product_id: 4},(err, productData) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, productData);
    }
  })
};

//need to pass down a particular product_id here
const getProductStylesData = callback => {
  models.Style.find({product_id: 5}, (err, styles) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, styles);
    }
  })
};

//need to pass down a particular product_id here
const getPhotoData = callback => {
  models.Photo.find({style_id: 5}, (err, styles) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, styles);
    }
  })
};

//need to pass down a particular product_id here
const getSkuData = callback => {
  models.Sku.find({style_id: 5}, (err, styles) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, styles);
    }
  })
};

//need to pass down a particular product_id here
const getRelatedProductsData = callback => {
  models.RelatedProduct.find({product_id: 5}, (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data);
    }
  })
};

module.exports = {
  getProductData,
  getProductStylesData,
  getPhotoData,
  getSkuData,
  getRelatedProductsData
};