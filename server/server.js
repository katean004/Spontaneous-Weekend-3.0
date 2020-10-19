if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("build"));

  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));
}
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./database");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const app = express();
const PORT = 8080;
// Route requires
const user = require("./routes/user");
const favoriteMoviesRouter = require("./routes/favoriteMovies");
const favoriteFoodsRouter = require("./routes/favoriteFood");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(express.static("public"));

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
