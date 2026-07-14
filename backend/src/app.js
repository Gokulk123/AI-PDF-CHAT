const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const pdfRoutes = require("./routes/pdfRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth/", authRoutes);
app.use("/api/pdf", pdfRoutes);
app.use("/api/chat", chatRoutes);

module.exports = app;
