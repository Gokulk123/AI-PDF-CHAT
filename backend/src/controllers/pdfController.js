const { randomUUID } = require("crypto");

const { readPDF } = require("../services/pdfService");
const { splitText } = require("../services/textSplitter");
const { generateEmbeddings } = require("../services/embeddingService");
const { addEmbedding } = require("../services/vectorStore");

const uploadPDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    console.log("========== STEP 1 ==========");
    console.log("Reading PDF...");

    const text = await readPDF(req.file.path);

    console.log("PDF Read Successfully");

    console.log("========== STEP 2 ==========");
    console.log("Splitting PDF...");

    const chunks = await splitText(text);

    chunks.forEach((chunk, index) => {
      console.log("==========");
      console.log("Chunk", index + 1);
      console.log(chunk.pageContent);
    });

    console.log(`Total Chunks : ${chunks.length}`);

    console.log("========== STEP 3 ==========");

    let count = 1;

    for (const chunk of chunks) {
      console.log(`Processing Chunk ${count}`);

      const embedding = await generateEmbeddings(chunk.pageContent);

      console.log(`Embedding Generated`);

      await addEmbedding(randomUUID(), chunk.pageContent, embedding);

      console.log(`Chunk ${count} Stored`);

      count++;
    }

    console.log("========== FINISHED ==========");

    res.status(200).json({
      success: true,
      message: "PDF Indexed Successfully",
      totalChunks: chunks.length,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadPDF,
};
