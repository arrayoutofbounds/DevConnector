const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// function to connect to the mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1); // exit with failure
  }
};

module.exports = connectDB;
