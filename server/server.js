const express = require('express');
const path = require('path');

const app = express();

app.use('/build', (req, res) =>
  res.sendFile(path.join(__dirname, '../build/bundle.js'))
);

app.get('/', (req, res) =>
  res
    .status(200)
    .type('html')
    .sendFile(path.join(__dirname, '../index.html'))
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
