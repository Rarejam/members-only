const memberPool = require("./memberPool"); // update this path

const createTable = `
  CREATE TABLE IF NOT EXISTS members (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255),
    message TEXT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

async function main() {
  console.log("seeding...");
  //   seperate the pool declaration from this file so that we can end the call and use pool elsewhere
  await memberPool.query(createTable);
  await memberPool.end();
  console.log("done");
}

main();
