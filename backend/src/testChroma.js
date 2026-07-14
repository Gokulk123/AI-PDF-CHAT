const { getCollection } = require("./services/vectorService");

async function test() {
  try {
    const collection = await getCollection();

    console.log("Collection Name:", collection.name);
  } catch (err) {
    console.log(err);
  }
}

test();