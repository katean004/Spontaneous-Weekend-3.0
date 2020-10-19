//Connect to Mongo database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || `mongodb+srv://spontaneous-admin:${process.env.MONGODB_PASS}@cluster0.ifnbt.mongodb.net/Spontaneous-Weekend?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;
