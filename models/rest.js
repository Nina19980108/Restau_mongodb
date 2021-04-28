const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restSchema = new Schema({
  id: {
    type: Number,
    require: true
  },

  name: {
    type: String,
    require: true
  },

  name_en: {
    type: String,
    require: true
  },

  category: {
    type: String,
    require: true
  },

  Image: {
    type: String,
    require: true
  },

  location: {
    type: String,
    require: true
  },

  phone: {
    type: Number,
    require: true
  },

  google_map: {
    type: String,
    require: true
  },

  rating: {
    type: Number,
    require: true
  },

  description: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Restau', restSchema)