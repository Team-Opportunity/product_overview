const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    unique: true,
    index: true
  },
  name: {type: String},
  slogan: {type: String},
  description: {type: String},
  category: {type: String},
  default_price: {type: Number},
}, {versionKey: false});

const featureSchema = new mongoose.Schema({
  feature_id: {type: Number, index: true},
  feature: {type: String},
  value: {type: String},
}, {versionKey: false});

const styleSchema = new mongoose.Schema({
  id: {type: Number, unique: true, index: true},
  product_id: {type: Number},
  name: {type: String},
  sales_price: {type: String, default: null},
  original_price: {type: String},
  default: {type: Boolean},
}, {versionKey: false});

const photoSchema = new mongoose.Schema({
  style_id: {type: Number, index: true},
  thumbnail_url: {type: String},
  url: {type: String}
}, {versionKey: false});

const skuSchema = new mongoose.Schema({
  style_id: {type: Number, required: true, index: true},
  size: {type: String},
  quantity: {type: Number}
}, {versionKey: false});

const relatedProductSchema = new mongoose.Schema({
  product_id: {type: Number, index: true},
  related_product_id: {type: Number}
}, {versionKey: false});

const Product = mongoose.model('Product', productSchema);
const Feature = mongoose.model('Feature', featureSchema);
const Style = mongoose.model('Style', styleSchema);
const Photo = mongoose.model('Photo', photoSchema);
const Sku = mongoose.model('Sku', skuSchema);
const RelatedProduct = mongoose.model('RelatedProduct',relatedProductSchema);

module.exports =  {
  RelatedProduct,
  Product,
  Feature,
  Style,
  Photo,
  Sku
}