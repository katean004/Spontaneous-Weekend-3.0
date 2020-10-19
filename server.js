if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "client/build/index.html"));
  });}
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

// Routes
app.use("/api/user", user);
app.use("/api/favoriteMovies", favoriteMoviesRouter);
app.use("/api/favoriteFoods", favoriteFoodsRouter);

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});
