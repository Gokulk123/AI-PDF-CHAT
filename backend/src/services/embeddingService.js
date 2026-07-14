const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateEmbeddings(text) {
  try {
    const response = await ai.models.embedContent({
      model: "gemini-embedding-001",
      contents: text,
    });

    return response.embeddings[0].values;
  } catch (error) {
    console.error("Embedding Error:", error);
    throw error;
  }
}

module.exports = {
  generateEmbeddings,
};