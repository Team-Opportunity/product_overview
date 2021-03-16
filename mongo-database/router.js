const express = require('express');
const router = express.Router();

const IndexController = require('./controllers.js');

router.get('/repos', (req, res) => {
  console.log('route hit')
  IndexController.getAllRepos((err, allRepos) => {
    if (err) {
      res.status(500).send('Could not retrieve repos');
    } else {
      res.send(allRepos);
    }
  })
})

module.exports = router;