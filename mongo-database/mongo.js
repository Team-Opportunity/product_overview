// /MongoDB setup
const mongoose = require('mongoose');
const mongodb = mongoose.connection;

const url = 'mongodb://127.0.0.1:27017/FECproducts';
mongoose.connect(url, {useNewUrlParser: true}, (err) => {
  if (err) throw err;
  else {
    console.log('MongoDB connection successful');
  }
});

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  slogan: {type: String, required: true},
  description: {type: String, required: true},
  category: {type: String, required: true},
  default_price: {type: Number, required: true}, //number type
  features: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feature'
  }]
});

const featureSchema = new mongoose.Schema({
  feature: {type: String},
  value: {type: String}
});

const productStyleListSchema = new mongoose.Schema({
  results: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Style'
  }]
});

const styleSchema = new mongoose.Schema({
  name: {type: String, required: true},
  original_price: {type: Number, required: true},
  sales_price: {type: Number, required: true},
  default: {type: Boolean, required: true},
  photos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Photo'
  }],
  sku: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sku'
  }]
});

const photoSchema = new mongoose.Schema({
  thumbnail_url: {type: String},
  url: {type: String}
});

const skuSchema = new mongoose.Schema({
  quantity: {type: Number, required: true },
  size: {type: String}
});

const relatedProductSchema = new mongoose.Schema({
  related_product_ids: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]
});

//mongo will take the lowercase-plural version of 'Product'
const productModel = mongoose.model('Product', productSchema);
const featuresModel = mongoose.model('Feature', featureSchema);
const productStyleListModel = mongoose.model('ProductStyleList', productStyleListSchema);
const styleModel = mongoose.model('Style', styleSchema);
const photoModel = mongoose.model('Photo', photoSchema);
const skuModel = mongoose.model('Sku', skuSchema);
const relatedProductsModel = mongoose.model('RelatedProduct', relatedProductSchema);

module.exports = {
  productModel,
  featuresModel,
  productStyleListModel,
  styleModel,
  photoModel,
  skuModel,
  relatedProductsModel
};