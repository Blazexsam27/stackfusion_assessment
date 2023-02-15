require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {}, () => {
      console.log("Database connection success");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectToMongo,
};
