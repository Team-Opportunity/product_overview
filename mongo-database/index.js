const csv = require('csv-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const model = require("./mongo");

const url = 'mongodb://127.0.0.1:27017/FECproducts';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connection successful'))
  .catch((err) => console.log(err));

var count = 0;

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
//change the filepath, variable name, model name and its property, and the .save value for each schema
fs.createReadStream('mongo-database/photos-4.csv', {start: 0, highWaterMark: 64})
  .pipe(csv())
  .on('data', (data) => {
    // console.log(data[' styleId']);
    // console.log(data[' thumbnail_url'])
    // console.log(data[' url'])
   var newnew = new model.Photo({
      style_id: data[' styleId'],
      thumbnail_url: data[' thumbnail_url'],
      url: data[' url'],
    });
    newnew.save(function(err, item) {
      if (item) {
        count++
        process.stdout.write('c' + count)
      }
      if (err) {
       console.log(err)
      }
    });
  })
  .on('end', () => {
    console.log("Done");
  });


module.exports = mongoose;