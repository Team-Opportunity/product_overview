const mongo = require('./index.js');
const schemas = require('./schemas.js');

//lookup features
const getProduct = {
  async get(req, res){
    const productFeatures = await schemas.Product.aggregate([
      {
        $lookup:
        {
          from: 'features',
          localField: 'product_id',
          foreignField: 'feature_id',
          as: 'features',
        }
      },
     {$match: {product_id: Number(req.params.product_id)}},
     {$project: {
       "_id": 0,
       "features._id": 0,
       "features.feature_id": 0
      }}
    ])
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => res.status(500).send(err))
  }
}

//lookup the skus and photos
const getProductStyles = {
  async get(req, res){
    const productSkus = await schemas.Style.aggregate([
      {
        $lookup:
        {
          from: 'skus',
          localField: 'id',
          foreignField: 'style_id',
          as: 'skus'
        }
      },
      {
        $lookup:
        {
          from: 'photos',
          localField: 'id',
          foreignField: 'style_id',
          as: 'photos'
        }
      },
     {$match: {product_id: Number(req.params.product_id)}},
     {$project: {
       "_id": 0,
       "id": 0,
       "product_id": 0,
       "skus._id": 0,
       "skus.style_id": 0,
       "photos._id": 0,
       "photos.style_id": 0
      }}
    ])
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => res.status(500).send(err))
  }
}

const getRelatedProducts = function(req, res) {
  const currentId =  req.params.product_id;

  schemas.RelatedProduct.find({product_id: currentId}, (err, results) => {
    if (err) {
      res.status(500).send(err)
    } else {
      let formattedResults = [];
      for (let i = 0; i < results.length; i++) {
        formattedResults.push({
          product_id: results[i]['product_id'],
          related_products_id: results[i]['related_product_id']
        })
      }
      res.status(200).send(formattedResults)
    };
  })
};

module.exports = {
  getProduct,
  getProductStyles,
  getRelatedProducts
}