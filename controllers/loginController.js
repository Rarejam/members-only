const { insertLoginDetails } = require("../db/queries");
const passport = require("passport");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  await insertLoginDetails({ email, password });
  console.log(email, password);
};

module.exports = loginController;
