/* eslint-disable camelcase */
const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 10000000;
const filename = argv.output || 'SDC_Data.csv';
const stream = fs.createWriteStream(filename);

const minMaxRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const arrangement = ['Hotel room',
  'Tiny house',
  'Entire House',
  'Entire apartment',
  'Entire cabin',
  'Entire bungalow',
  'Entire cottage',
  'Private room',
];

const createPost = (id) => {
  const randomImage = Math.floor(Math.random() * 1001);
  const randomArrangement = Math.floor((arrangement.length * Math.random()));

  const listing_id = id;
  const place_title = `${arrangement[randomArrangement]} on ${faker.address.streetName()}`;
  const sleeping_arrangement = `${faker.company.catchPhraseAdjective().replace(',', '')} ${faker.commerce.department().replace(',', '')} · ${Math.floor(Math.random() * 5 + 1)} ${faker.random.word().replace(',', '')}`;
  const image = `https://fec-airbnb-images.s3-us-west-2.amazonaws.com/image_${randomImage}.jpg`;
  const price = minMaxRandom(50, 1000);
  const review_count = minMaxRandom(0, 500);
  const review_average = Math.round((Math.random() * 5) * 100) / 100;
  const superhost = faker.random.boolean();
  const saved = false;

  return `${listing_id},${place_title},${sleeping_arrangement},${image},${price},${review_count},${review_average},${superhost},${saved}\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    const canWrite = true;
    do {
      i -= 1;
      const post = createPost(i);
      // check if i === 0 so we would write and call `done`
      if (i === 0) {
        // we are done so fire callback
        writeStream.write(post, encoding, done);
      } else {
        // we are not done so don't fire callback
        writeStream.write(post, encoding);
      }
      // else call write and continue looping
    } while (i > 0 && canWrite);
    if (i > 0 && !canWrite) {
      // our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing();
};

// write our `header` line before we invoke the loop
stream.write('listing_id,place_title,sleeping_arrangement,image,price,review_count,review_average,superhost,saved\n', 'utf-8');
// invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end();
});
