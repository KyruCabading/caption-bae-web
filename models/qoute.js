var mongoose = require('mongoose');

var qouteSchema = new mongoose.Schema({
  text: String,
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }]
})

module.exports = mongoose.model('Qoute', qouteSchema);
