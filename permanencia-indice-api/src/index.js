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

app.get("/authors/:authorId", async (req, res) => {
  const authorId = req.params.authorId;
  const links = await mongoDB.getLinksByAuthor(req.params.authorId);
  const author = await mongoDB.getAuthor(authorId);

  res.send({links, author});
})

app.listen(3000, () => {
  console.log('listening on port 3000!');
})