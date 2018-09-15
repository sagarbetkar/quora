const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  username: String,
  email: { type : String, required: true, unique: true},
  password: String,
  passwordExpiry: String,
  createdAt: { type: Date, default: Date.now},
  modifiedAt: { type: Date, default: Date.now},
  firstName: String,
  lastName: String,
  middleName: String,
  photourl: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
