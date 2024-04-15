const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    console.log("creasting a new user")
    return res.send(200)
  } catch (error) {
    console.log(error);
    return res.send(500).send(error);
  }
}

const login = async (req, res) => {
  try {
    console.log("trying to login")
    return res.send(200)
  } catch (error) {
    console.log(error);
    return res.send(500).send("Internal server error!");
  }
};

module.exports = {
  register,
  login,
};
