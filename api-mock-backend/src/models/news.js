const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  source: String,
  date: String,
  category: String,
  url: String,
  isFeatured: Boolean,
});

module.exports = mongoose.model('News', newsSchema);