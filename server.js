if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./server/database");
const MongoStore = require("connect-mongo")(session);
// const mongoose = require("mongoose");
const passport = require("./server/passport");
const app = express();
const PORT = process.env.PORT || 8080;
// Route requires
const user = require("./server/routes/user");
const favoriteMoviesRouter = require("./server/routes/favoriteMovies");
const favoriteFoodsRouter = require("./server/routes/favoriteFood");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("client/public"));


app.use(express.json());
// Sessions
app.use(
  session({
    secret: "iamacat", //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, //required
    saveUninitialized: false //required
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use("/user", user);
app.use("/favoriteMovies", favoriteMoviesRouter);
app.use("/favoriteFoods", favoriteFoodsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});
