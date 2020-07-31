const mongoose = require("mongoose");
const config = require("config");

const mongoDB = async () => {
  try {
    await mongoose.connect(config.get("mongo-string"), {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error(error.message);
  }
};
module.exports = mongoDB;
