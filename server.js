const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoRouter = require('./mongo-database/router.js');

app.use(express.static(path.join(__dirname,'frontend-capstone/dist')));
app.use('/', mongoRouter);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
