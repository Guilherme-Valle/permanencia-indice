const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json());

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/permanencia_indice');

const authorsSchema = new mongoose.Schema({
  name: String
});

const linksSchema = new mongoose.Schema({
  author: String,
  title: String,
  link: String
});

const Author = mongoose.model('Author', authorsSchema);

const Link = mongoose.model('Link', linksSchema);

app.get('/', (req, res) => {
  Author.find((err, authors) => {
      res.send(authors);
    })
});

app.listen(3001, () => {
  console.log('listening on port 3001!');
})