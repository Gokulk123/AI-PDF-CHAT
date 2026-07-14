const { RecursiveCharacterTextSplitter } = require("@langchain/textsplitters");

const splitText = async (text) => {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1200,
    chunkOverlap: 300,
    separators: ["\n\n", "\n", ". ", " ", ""],
  });

  const doc = await splitter.createDocuments([text]);

  return doc;
};

module.exports = {
  splitText,
};
