const express = require("express");
const upload = require("../middlewares/uploadMiddleware");
const { uploadPDF } = require("../controllers/pdfController");
const router = express.Router();

router.post("/upload", upload.single("pdf"), uploadPDF);

module.exports = router;
