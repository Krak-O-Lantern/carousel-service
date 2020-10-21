const { Pool } = require('pg');

const pool = new Pool({
  user: 'ericwise',
  host: 'localhost',
  database: 'sdc_pg',
  password: '',
  port: 5432,
});

const getListingById = (req, res) => {
  const listing_id = 1 /*req.params.listing_id*/;

  pool.query(`SELECT * from places WHERE listing_id = ${listing_id}`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

module.exports = {
  getListingById,
};
