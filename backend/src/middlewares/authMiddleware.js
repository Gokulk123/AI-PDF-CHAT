const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findUserById(decoded.id);
      return next();
    }
    return res.status(401).json({
      message: "Unauthorized",
    });
  } catch (erro) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = protect;