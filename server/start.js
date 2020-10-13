const app = require('./index.js');

const PORT = process.env.PORT || 3007;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port: ', PORT);
});
