const mongoose = require("mongoose");
const config = require("config");

const mongoDB = async () => {
  try {
    await mongoose.connect(config.get("mongo-string"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected!!");
  } catch (error) {
    console.error(error.message);
  }
};
module.exports = mongoDB;
