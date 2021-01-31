const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/rememberance_page', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const pageSchema = new Schema({
  name: String,
  birthYear: Number,
  deathYear: Number,
  description: String,
});

const cardSchema = new Schema({
  sender: String,
  message: String,
  date: Date,
  colour: String,
  page: {
    type: Schema.Types.ObjectId,
    ref: 'Page',
    required: true,
  },
});

const Page = mongoose.model('Page', pageSchema);
const Card = mongoose.model('Card', cardSchema);

module.exports = {
  Page,
  Card,
};