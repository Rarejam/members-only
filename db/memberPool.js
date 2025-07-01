const { Pool } = require("pg");

const memberPool = new Pool({
  host: process.env.MEMBER_HOST,
  user: process.env.MEMBER_USER,
  password: process.env.MEMBER_PASSWORD,
  port: process.env.MEMBER_DEFAULTPORT,
  database: process.env.MEMBER_DATABASE,
});
module.exports = memberPool;
