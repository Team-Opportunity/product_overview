const csv = require('csv-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const model = require("./schemas");

const url = 'mongodb://mongodb:27017/FECproducts';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  // .then(() => console.log('MongoDB connection successful'))
  // .catch((err) => console.log(err));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION ERROR'));
db.once('open', function() {
  console.log('Connected to the MongoDB')
})


//change the filepath, model name and its properties for each schema
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