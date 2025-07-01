require("dotenv").config();
// const { Pool } = require("pg");

// const pool = new Pool({
//   // host: process.env.HOST,
//   // user: process.env.USER,
//   // password: process.env.PASSWORD,
//   // port: process.env.DEFAULTPORT,
//   // database: process.env.DATABASE,
//   connectionString: postgresql://members_only_6up2_user:42Ud2J3pK9BTlcWA15h30uRwlq6xuVlh@dpg-d1i4peje5dus73f4b920-a.oregon-postgres.render.com/members_only_6up2,
// });

// module.exports = pool;

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
