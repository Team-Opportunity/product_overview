const mongo = require('./index.js');
const models = require('./queryModels.js');

//need to pass down a particular product_id here
const getProduct = function(req, res) {
  const currentId = req.params.product_id;
  models.getProductData(currentId, (err, results) => {
    if (err) {
      res.status(500).send(err)
    } else res.status(200).send(results);
  })
};

const getProductFeatures = function(req, res) {
  const currentId = req.params.feature_id;
  models.getProductFeatureData(currentId, (err, features) => {
    if (err) {
      res.status(500).send(err)
    } else res.status(200).send(features);
  })
};

//need to pass down a particular product_id here
const getProductStyles = function(req, res) {
  models.getProductStylesData((err, results) => {
    if (err) {
      res.status(500).send(err)
    } else res.status(200).send(results);
  })
}

//need to pass down a particular style_id here
const getPhotos = function(req, res) {
  models.getPhotoData((err, results) => {
    if (err) {
      res.status(500).send(err)
    } else res.status(200).send(results);
  })
}

//need to pass down a particular style_id here
const getSkus = function(req, res) {
  models.getSkuData((err, results) => {
    if (err) {
      res.status(500).send(err)
    } else res.status(200).send(results);
  })
}

//need to pass down a particular product_id here
const getRelatedProducts = function(req, res) {
  const currentId =  req.params.product_id;
  models.getRelatedProductsData(currentId, (err, results) => {
    if (err) {
      res.status(500).send(err)
    } else res.status(200).send(results);
  })
}

module.exports = {
  getProduct,
  getProductFeatures,
  getProductStyles,
  getPhotos,
  getSkus,
  getRelatedProducts
}