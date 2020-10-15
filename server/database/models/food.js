const mongoose = require("mongoose");

const favoriteFoodSchema = new mongoose.Schema({
  cuisine: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("FavoriteFood", favoriteFoodSchema);
