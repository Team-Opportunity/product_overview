// const mongoose = require('./index.js');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    unique: true
  },
  name: {type: String},
  slogan: {type: String},
  description: {type: String},
  category: {type: String},
  // default_price: {type: Number},
  // features: [{
  //   id: {type: Number},
  //   feature_id: {type: Number},
  //   feature: {type: String},
  //   value: {type: String}
  //   // type: mongoose.Schema.Types.ObjectId,
  //   // ref: 'Feature'
  // }]
}, {versionKey: false});

// ensure uniqueness for each value per schema

//link feature id to product id above
const featureSchema = new mongoose.Schema({
  feature_id: {type: Number},
  feature: {type: String},
  value: {type: String}
}, {versionKey: false});

const productStyleListSchema = new mongoose.Schema({
  results: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Style'
  }]
}, {versionKey: false});

const styleSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  product_id: {type: Number},
  name: {type: String},
  sales_price: {type: String, default: null},
  original_price: {type: String},
  default: {type: Boolean},
  // photos: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Photo'
  // }],
  // sku: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Sku'
  // }]
}, {versionKey: false});

const photoSchema = new mongoose.Schema({
  style_id: {type: Number},
  thumbnail_url: {type: String},
  url: {type: String}
}, {versionKey: false});

const skuSchema = new mongoose.Schema({
  style_id: {type: Number, required: true},
  size: {type: String},
  quantity: {type: Number}
}, {versionKey: false});

//link product_id to product id in the products
const relatedProductSchema = new mongoose.Schema({
  product_id: {type: Number},
  related_product_id: {type: Number}
}, {versionKey: false});

// const Product = mongoose.model('Product', productSchema);
// const Feature = mongoose.model('Feature', featureSchema);
// const ProductStyleList = mongoose.model('ProductStyleList', productStyleListSchema);
// const Style = mongoose.model('Style', styleSchema);
const Photo = mongoose.model('Photo', photoSchema);
// const Sku = mongoose.model('Sku', skuSchema);
// const RelatedProduct = mongoose.model('RelatedProduct',relatedProductSchema);

module.exports =  {
  // RelatedProduct,
  // Product,
  // Feature,
  // ProductStyleList,
  // Style,
  Photo
  // Sku
}


// relatedProductSchema.pre('save', async function (next) {
//   var relatedproduct = this;
//   if (this.isNew) {
//       try {
//           relatedproduct._id = new mongoose.Types.ObjectId();
//           return next();
//       } catch (error) {
//           return next(error);
//       }
//   } else {
//       return next();
//   }
// })
