const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoDB = require('./db');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/authors', async (req, res) => {
  const authors = await mongoDB.getAuthors();

  res.send(authors);
});

app.listen(3001, () => {
  console.log('listening on port 3001!');
})