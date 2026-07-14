const express = require("express");
const userController = require("../controllers/authController");
const protect = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/profile", protect, userController.profile);

module.exports = router;
