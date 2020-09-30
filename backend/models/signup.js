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
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Movie"
  },
  resaurant: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Restaurant"
  }
});
module.exports = mongoose.model("Signup", signupSchema);
