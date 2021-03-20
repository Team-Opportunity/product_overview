const mongo = require('./index.js');
const models = require('./schemas.js');

//need to pass down a particular product_id here
const getProductData = (currentId, callback) => {
  models.Product.find({product_id: currentId},(err, productData) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, productData);
    }
  })
};

const getProductFeatureData = (currentId, callback) => {
  models.Feature.find({feature_id: currentId},(err, productFeatures) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, productFeatures);
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

const getRelatedProductsData = (currentId, callback) => {
  models.RelatedProduct.find({product_id: currentId}, (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data);
    }
  })
};

module.exports = {
  getProductData,
  getProductFeatureData,
  getProductStylesData,
  getPhotoData,
  getSkuData,
  getRelatedProductsData
};