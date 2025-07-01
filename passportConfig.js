const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const pool = require("./db/pool");

function initializePassport(passport) {
  const fields = {
    usernameField: "email",
    passwordField: "password",
  };

  async function authenticateUser(email, password, done) {
    const results = await pool.query("SELECT * FROM members WHERE email = $1", [
      email,
    ]);
    console.log(results.rows);
    const user = results.rows[0];
    if (!user) {
      return done(null, false, { message: " Incorrect email" });
    }

    console.log("Password from form:", password); // ✅ Debug log
    console.log("Password from DB:", user.password); // ✅ De
    const matchPassword = await bcrypt.compare(password, user.password);
    if (matchPassword) {
      return done(null, user);
    } else {
      return done(null, false, { message: "Incorrect Password" });
    }
  }
  passport.use(new LocalStrategy(fields, authenticateUser));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const results = await pool.query("SELECT * FROM members WHERE id = $1", [
        id,
      ]);
      const user = results.rows[0];
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
}
module.exports = initializePassport;
