const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  favorites: {
    type: Array
    // error message
    // Needs further consideration.
  }
});
module.exports = mongoose.model("User", userSchema);
