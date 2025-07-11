const pool = require("./pool.js");

async function insertSignupDetails({
  firstname,
  lastname,
  email,
  password,
  // confirm_password,
  date,
}) {
  await pool.query(
    "INSERT INTO members (firstname,lastname,email,password,date) VALUES ($1,$2,$3,$4,$5)",
    [firstname, lastname, email, password, date]
  );
}
module.exports = { insertSignupDetails };
