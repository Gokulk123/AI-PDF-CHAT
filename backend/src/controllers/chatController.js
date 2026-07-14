const { generateEmbeddings } = require("../services/embeddingService");
const { searchEmbedding } = require("../services/vectorStore");
const { askGroq } = require("../services/chatService");

const askQuestion = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        message: "Question is required",
      });
    }

    console.log("Question:", question);

    const embedding = await generateEmbeddings(question);

    console.log("Question Embedding Length:", embedding.length);
    console.log("Question First 5 Values:");
    console.log(embedding.slice(0, 5));

    const results = await searchEmbedding(embedding, question, 5);
    console.log("Results:", results);
    results.forEach((r, i) => {
      console.log("========== RESULT", i + 1, "==========");
      console.log("Score:", r.score);
      console.log(r.item.metadata.text);
    });
    const context = results.map((r) => r.item.metadata.text).join("\n\n");

    const answer = await askGroq(question, context);

    console.log("ANSWER:");
    console.log(answer);

    res.json({
      success: true,
      answer,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  askQuestion,
};
