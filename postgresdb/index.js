const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '3.130.237.41',
  database: 'sdc_pg',
  password: 'Hrsea12!',
  port: 5432,
});

const getListingById = (req, res) => {
  const id = Number(req.params.listing_id);
  const plusThirteen = id + 50;
  pool.query(`SELECT * from places WHERE listing_id > ${id} and listing_id < ${plusThirteen} limit 12`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results.rows);
    }
  });
};

module.exports = {
  getListingById,
};
