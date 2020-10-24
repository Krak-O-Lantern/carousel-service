/* eslint-disable no-shadow */
const express = require('express');
const path = require('path');
const compression = require('compression');
const db = require('../postgresdb/index.js');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();

// app.use(compression());
app.use('/listings/:id', express.static(PUBLIC_DIR));
// app.get('/', (req, res) => {
//   res.send(200);
// });

app.get('/api/listings/:listing_id', db.getListingById);

module.exports = app;
