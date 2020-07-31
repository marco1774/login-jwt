const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserRegisterSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", UserRegisterSchema);
