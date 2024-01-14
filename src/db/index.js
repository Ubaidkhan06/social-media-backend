const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const res = await mongoose.connect(
      `${process?.env?.MONGO_URI}socialmedia`
    );
    console.log("MongoDB connected to", res.connection.host);
  } catch (err) {
    console.log(err);
    process?.exit(1);
  }
};

module.exports = connectDB;
