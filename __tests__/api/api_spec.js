const frisby = require('frisby');

it('should return a 200 status for product info', function () {
  return frisby.get('http://localhost:3001/products/1')
    .expect('status', 200);
});

it('should return a 200 status for product styles info', function () {
  return frisby.get('http://localhost:3001/products/1/styles')
    .expect('status', 200);
});

// it('should return a 200 status for photos info ', function () {
//   return frisby.get('http://localhost:3001/photos/3')
//     .expect('status', 200);
// });

it('should return a 200 status for skus info', function () {
  return frisby.get('http://localhost:3001/skus/1')
    .expect('status', 200);
});

// it('should return a 200 status for related product info', function () {
//   return frisby.get('http://localhost:3001/products/1/related')
//     .expect('status', 200);
// });