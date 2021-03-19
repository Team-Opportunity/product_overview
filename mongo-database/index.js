const csv = require('csv-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const model = require("./schemas");

const url = 'mongodb://127.0.0.1:27017/FECproducts';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connection successful'))
  .catch((err) => console.log(err));

//change the filepath, model name and its properties, and the .save value for each schema
//disabled because ETL process is done

// var count = 0;

// fs.createReadStream('mongo-database/product.csv', {start: 0, highWaterMark: 64})
//   .pipe(csv())
//   .on('data', (data) => {
//    var newnew = new model.Product({
//       product_id: data['id'],
//       name: data[' name'],
//       slogan: data[' slogan'],
//       description: data[' description'],
//       category: data[' category'],
//       default_price: data[' default_price'],
//     });
//     newnew.save(function(err, item) {
//       if (item) {
//         count++
//         process.stdout.write('c' + count)
//       }
//       if (err) {
//        console.log(err)
//       }
//     });
//   })
//   .on('end', () => {
//     console.log("Done");
//   });


module.exports = mongoose;

// db.products.aggregate([
//   {
//     $lookup:
//     {
//       from: 'features',
//       localField: "_id",
//       foreignField: "feature_id",
//       as: "featuresarray"
//     }
//   },
//   {$match: {product_id: 2}}
// ]).pretty()
