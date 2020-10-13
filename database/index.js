/* eslint-disable no-console */
const mongoose = require('mongoose');

const mongoUri = 'mongodb://database/airbnb';
const db = mongoose.connect(mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to airbnb db'))
  .catch((err) => console.log(err));

module.exports = db;
