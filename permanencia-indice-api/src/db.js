const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/permanencia_indice');

const ObjectId = mongoose.Types.ObjectId;

const authorsSchema = new mongoose.Schema({
  _id: String,
  name: String
});

const linksSchema = new mongoose.Schema({
  authorName: String,
  authorId: ObjectId,
  title: String,
  link: String
});

const Author = mongoose.model('Author', authorsSchema);

const Link = mongoose.model('Link', linksSchema);

const getAuthors = () => {
  return Author.find();
};

const getLinksByAuthor = (authorId) => {
  return Link.find({ authorId: new ObjectId(authorId) });
}

module.exports = {
  getAuthors,
  getLinksByAuthor
}
