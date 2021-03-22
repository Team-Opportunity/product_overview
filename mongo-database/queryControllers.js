const mongo = require('./index.js');
const models = require('./queryModels.js');
const {Product} = require('./schemas.js');

//need to pass down a particular product_id here
// const getProduct = function(req, res) {
//   const currentId = req.params.product_id;
//   models.getProductData(currentId, (err, results) => {
//     if (err) {
//       res.status(500).send(err)
//     } else res.status(200).send(results);
//   })
// };

const getProduct = {
  async get(req, res){
    const productFeatures = await Product.aggregate([
      {
        $lookup:
        {
          from: 'features',
          localField: 'product_id',
          foreignField: 'feature_id',
          as: 'productfeatures'
        }
      },
     {$match: {product_id: Number(req.params.product_id)}}
    ])
    res.send(productFeatures)
  }
    // console.log('does this get called tho');
    // const productFeature = await Product.findById(req.params.product_id);
    // res.send(productFeature);
}

// const productControllers = {
//   async index(req, res){
//     const productFeatures = await Product.find().populate({
//       path: 'features',

//     })
//     res.send(productFeatures)
//   },

//   async show(req, res){
//     const productFeature = await Product.findById(req.params.product_id);
//     res.send(productFeature);
//   }
// }


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
  const currentId = req.params.product_id;
  models.getProductStylesData(currentId, (err, results) => {
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