const mongoose = require("mongoose");

const favoriteMovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("FavoriteMovie", favoriteMovieSchema);
