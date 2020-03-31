const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countriesSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  confirmed: {
    type: Number,
    required: true
  },
  deaths: {
    type: Number,
    required: true
  },
  recovered: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  geo: {
    type: Object,
    required: true
  }
});

const Countries = mongoose.model('Countries', countriesSchema);
module.exports = Countries;