const client = require("../config/chroma");

let collection = null;

async function getCollection() {
  if (!collection) {
    collection = await client.getOrCreateCollection({
      name: "pdf_documents",
    });
    console.log("✅ Collection Created:", collection.name);
  }
  return collection;
}

module.exports = {
  getCollection,
};