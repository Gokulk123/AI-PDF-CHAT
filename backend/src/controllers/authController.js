const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const isExists = await User.findUserByEmail(email);
    if (isExists) {
      return res.status(400).json({
        message: "Email Already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userDetails = await User.createUser(name, email, hashedPassword);
    return res.status(201).json({
      message: "User Created",
      userDetails,
      token: generateToken(userDetails.id),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findUserByEmail(email);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      return res.status(401).json({
        message: "Invalid credential",
      });
    }
    res.status(200).json({
      message: "Login success",
      token: generateToken(user.id),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const profile = async (req, res) => {
  res.json(req.user);
};

module.exports = {
  register,
  login,
  profile,
};
