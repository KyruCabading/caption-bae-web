var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
  name: String,
  qoutes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Qoute"
  }]
})

module.exports = mongoose.model('Category', categorySchema);
