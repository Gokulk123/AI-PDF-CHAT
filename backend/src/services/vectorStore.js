const { LocalIndex } = require("vectra");
const path = require("path");

const index = new LocalIndex(
  path.join(__dirname, "../../vector-db")
);

async function initialize() {
  if (!(await index.isIndexCreated())) {
    console.log("Creating Vector DB...");
    await index.createIndex();
    console.log("Vector DB Created");
  }
}

async function addEmbedding(id, text, embedding) {
  await initialize();

  console.log("Saving:", id);
  console.log("Embedding Length:", embedding.length);

  await index.insertItem({
    id,
    vector: embedding,
    metadata: {
      text,
    },
  });

  console.log("Saved:", id);
}

async function searchEmbedding(embedding, question, limit = 3) {
  await initialize();

  // CHECK DATABASE
  const stats = await index.getIndexStats();
  console.log("========== INDEX STATS ==========");
  console.log(stats);

  const items = await index.listItems();
  console.log("Total Items:", items.length);

  // SEARCH
  const results = await index.queryItems(
    embedding,
    question,
    limit,
    undefined,
    false
  );

  return results;
}

module.exports = {
  initialize,
  addEmbedding,
  searchEmbedding,
  index,
};