const mongo = require('./index.js');
const models = require('./queryModels.js');
// const axios = require('axios');

//need to pass down a particular product_id here
const getProduct = function(req, res) {
  models.getProductData((err, results) => {
    if (err) {
      res.status(500).send(err)
    } else res.status(200).send(results);
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

//need to pass down a particular product_id here
const getPhotos = function(req, res) {
  models.getPhotoData((err, results) => {
    if (err) {
      res.status(500).send(err)
    } else res.status(200).send(results);
  })
}

//need to pass down a particular product_id here
const getSkus = function(req, res) {
  models.getSkuData((err, results) => {
    if (err) {
      res.status(500).send(err)
    } else res.status(200).send(results);
  })
}

//need to pass down a particular product_id here
const getRelatedProducts = function(req, res) {
  models.getRelatedProductsData((err, results) => {
    if (err) {
      res.status(500).send(err)
    } else res.status(200).send(results);
  })
}



module.exports = {
  getProduct,
  getProductStyles,
  getPhotos,
  getSkus,
  getRelatedProducts
}