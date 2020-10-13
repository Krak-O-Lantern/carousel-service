/* eslint-disable no-console */
const faker = require('faker');
const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('./index.js');
const { Place } = require('./Place.js');

const arrangement = ['Hotel room',
  'Tiny house',
  'Entire House',
  'Entire apartment',
  'Entire cabin',
  'Entire bungalow',
  'Entire cottage',
  'Private room',
];

const sampleData = [];

const minMaxRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

for (let i = 1; i <= 4; i += 1) {
  const randomArrangement = Math.floor((arrangement.length * Math.random()));
  sampleData.push({
    listing_id: i,
    place_title: `${arrangement[randomArrangement]} on ${faker.address.streetName()}`,
    sleeping_arrangement: `${faker.company.catchPhraseAdjective()} ${faker.commerce.department()} · ${Math.floor(Math.random() * 5 + 1)} ${faker.random.word()}`,
    image: `https://souperhost.s3-us-west-2.amazonaws.com/stayBig${i}.webp`,
    price: minMaxRandom(50, 1000),
    review_count: minMaxRandom(0, 500),
    review_average: Math.round((Math.random() * 5) * 100) / 100,
    superhost: faker.random.boolean(),
    saved: false,
  });
}
for (let i = 5; i <= 100; i += 1) {
  const randomArrangement = Math.floor((arrangement.length * Math.random()));
  sampleData.push({
    listing_id: i,
    place_title: `${arrangement[randomArrangement]} on ${faker.address.streetName()}`,
    sleeping_arrangement: `${faker.company.catchPhraseAdjective()} ${faker.commerce.department()} · ${Math.floor(Math.random() * 5 + 1)} ${faker.random.word()}`,
    image: `https://souperhost.s3-us-west-2.amazonaws.com/stay${i}.jpg`,
    price: minMaxRandom(50, 1000),
    review_count: minMaxRandom(0, 500),
    review_average: Math.round((Math.random() * 5) * 100) / 100,
    superhost: faker.random.boolean(),
    saved: false,
  });
}
const insertSampleData = () => {
  Place.create(sampleData)
    .then(() => mongoose.disconnect())
    .catch((err) => console.log(err));
};

insertSampleData();
