const { index, initialize } = require("./services/vectorStore");

async function test() {
    await initialize();

    const items = await index.listItems();

    const firstVector = items[0].vector;

    const results = await index.queryItems(firstVector, 3);

    console.log(results);
}

test();