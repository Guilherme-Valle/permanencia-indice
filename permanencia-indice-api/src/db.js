const mongoose = require('mongoose');

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

const getAuthors = () => {
  return Author.find();
};

const getLinksByAuthor = (authorName) => {
  return Link.find({ author: authorName });
}

module.exports = {
  getAuthors,
  getLinksByAuthor
}
