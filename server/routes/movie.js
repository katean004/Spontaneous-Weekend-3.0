const express = require("express");
const router = express.Router();
const FavoriteMovie = require("../database/models/movie");

/*
============ Task ============

Find a way to get movie from the component and post it into the favorites page
*/
router.get("/", async (req, res) => {
  try {
    const favorite__movie = await FavoriteMovie.find();
    res.json(favorite__movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async(req,res)=>{
  const favorite__movie = await FavoriteMovie
})

module.exports = router;
