const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "FullName is required",
    unique: true,
  },
  email: {
    type: String,
    required: "email is required",
    unique: true,
  },
  password: {
    type: String,
    required: "Password is required",
  }
});

const User = mongoose.model("User", userSchema);


module.exports = User;
