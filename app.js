const express = require('express');
const app = express();
const config = require('./models/config/config');

app.get('/', function (req, res, next) {
  res.send('/ route');
});

app.listen(config.port, () => {
  console.log('listening on port 3001');
});