const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    requried: true
  },
  description: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    requried: true
  },
  runTime: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model("Movie", movieSchema);
