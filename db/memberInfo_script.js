const pool = require("./pool"); // update this path

const createMemberTable = `
  CREATE TABLE IF NOT EXISTS member_info (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    message TEXT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

async function main() {
  console.log("seeding...");
  //   seperate the pool declaration from this file so that we can end the call and use pool elsewhere
  await pool.query(createMemberTable);
  await pool.end();
  console.log("done");
}

main();
