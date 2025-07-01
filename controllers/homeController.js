const { getMemberInfo } = require("../db/memberQueries");
const homeController = async (req, res) => {
  const memberInfo = await getMemberInfo();
  const messages = memberInfo.map((member) => ({
    id: member.id,
    user: member.username,
    text: member.message,
    added: member.date,
  }));
  res.render("home", { user: req.user.firstname, messages: messages });
};

module.exports = homeController;
