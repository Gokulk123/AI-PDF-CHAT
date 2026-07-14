const { index, initialize } = require("./services/vectorStore");

async function test() {
  await initialize();

  const stats = await index.listItems();

  console.log(stats);
}

test();