if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  app.use(express.static("client/build"));
}
const express = require("express");
const session = require("express-session");

const compression = require("compression");

const PORT = process.env.PORT || 3001;

const app = express();

const mongoose = require("mongoose");
// Melinda: To Do [Google log-in or passport]
const passport = require();

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Melinda Start ============
app.use(
  express.session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
// Melinda End ============

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", error => console.error(error));

db.once("open", () => console.log("connected to mongoose"));

app.listen(PORT, () => {
  console.log(`App running on port: http://localhost:${PORT}`);
});
