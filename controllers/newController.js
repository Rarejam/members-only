const { insertMemberInfo } = require("../db/memberQueries");

const newController = async (req, res) => {
  const { username, message } = await req.body;
  if (req.body.username == "" || req.body.message == "") {
    res.redirect("/new");
  }
  await insertMemberInfo({ username, message });
  res.redirect("/home");
};
module.exports = newController;
