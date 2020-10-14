//Connect to Mongo database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//your local database url
//27017 is the default mongoDB port
// const uri = "mongodb://localhost:27017/spontaneous-weekend";

// mongoose.connect(uri).then(
//   () => {
//     /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
//     console.log("Connected to Mongo");
//   },
//   err => {
//     /** handle initial connection error */
//     console.log("error connecting to Mongo: ");
//     console.log(err);
//   }
// );

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/spontaneous-weekend",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;
