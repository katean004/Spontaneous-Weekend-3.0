const mongoose = require("mongoose");
const db = require("../model/movie");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spontaneous");

const movieSeed = [

  {
  title: "The Old Guard",
  description: "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
  poster: "https://image.tmdb.org/t/p/w500/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg"

  
  runTime: 
  date: new Date(Date.now())
  
});

];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(movieSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
