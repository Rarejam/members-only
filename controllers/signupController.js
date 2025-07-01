const { insertSignupDetails } = require("../db/queries");
const bcrypt = require("bcryptjs");
const signupController = async (req, res) => {
  const { firstname, lastname, email, password, confirm_password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // const hashedPassword2 = await bcrypt.hash(confirm_password, 10);

  let errors = [];
  if (!firstname || !lastname || !email || !password || !confirm_password) {
    errors.push({ message: "All field must be filled" });
  }
  if (password.length < 6) {
    errors.push({ message: "password too short" });
  }
  if (password != confirm_password) {
    errors.push({ message: "Passwords do not match" });
  }
  if (errors.length > 0) {
    res.render("sign-up", { errors: errors });
  } else {
    await insertSignupDetails({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      // confirm_password: hashedPassword2,
      date: new Date(),
    });
    res.redirect("/log-in");
  }
};
module.exports = signupController;
