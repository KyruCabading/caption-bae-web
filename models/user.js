var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  qoutes: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Qoute"
    },
    text: String
  }
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
