const { deleteMemberInfo } = require("../db/memberQueries");
require("dotenv").config();
const adminController = async (req, res) => {
  const password = req.body.admin_password;
  const id = req.body.id; // ✅ Get ID
  //   console.log(password);
  //   console.log(process.env.DELETE_PASSWORD);
  // if (password != process.env.ADMIN_PASSWORD) {
  //   res.redirect("admin");
  // } else {
  //   await deleteMemberInfo({ id });
  //   res.redirect("home");
  // }
  await deleteMemberInfo({ id });
  res.redirect("home");
};

module.exports = adminController;
