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

router.post("/", async (req, res) => {
  const favorite__movie = new FavoriteMovie({
    rating: req.body.rating,
    title: req.body.title,
    description: req.body.description,
    releaseDate: req.body.releaseDate
  });

  try {
    // Persist the new favmovie in db
    const newFavoriteMovie = await favorite__movie.save();
    res.status(201).json(newFavoriteMovie);
  } catch (err) {
    // If something is wrong with the data that the user gave us.
    res.status(400).json({ message: err.message });
  }
});

router.get("/id", async (res, req)=>{
  // res.json("hello")
  res.send("hekjwbek.sdfjba.fs")
})

module.exports = router;
