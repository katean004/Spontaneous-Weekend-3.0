if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("../build"));
}
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./database");
const MongoStore = require("connect-mongo")(session);
// const mongoose = require("mongoose");
const passport = require("./passport");
const app = express();
const PORT = process.env.PORT || 8080;
// Route requires
const user = require("./routes/user");
const favoriteMoviesRouter = require("./routes/favoriteMovies");
const favoriteFoodsRouter = require("./routes/favoriteFood");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("../public"));
app.use(express.static(path.join(__dirname, "../build")));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'../build/index.html'));
});

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
app.use("/user", user);
app.use("/favoriteMovies", favoriteMoviesRouter);
app.use("/favoriteFoods", favoriteFoodsRouter);

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: http://localhost:${PORT}`);
});
