/* eslint-disable no-shadow */
const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const { Place } = require('../database/Place.js');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(PUBLIC_DIR));
app.get('/', (req, res) => {
  res.send(200);
});

app.get('/api/listings/:listing_id', (req, res) => {
  const id = req.params.listing_id;
  Place.findOne({ listing_id: id })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.post('/api/listings:listing_id', (req, res) => {
  const listing = req.body;
  Place.create(listing)
    .then(res.send(200))
    .catch((err) => res.send(err));
});

module.exports = app;
