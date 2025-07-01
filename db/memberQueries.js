const memberPool = require("./memberPool");

async function insertMemberInfo({ username, message }) {
  await memberPool.query(
    "INSERT INTO member_info ( username,message ) VALUES ($1,$2)",
    [username, message]
  );
}
async function getMemberInfo() {
  const info = await memberPool.query("SELECT * from member_info ");
  return info.rows;
}
async function deleteMemberInfo({ id }) {
  await memberPool.query("DELETE FROM member_info WHERE id = $1", [id]);
}
module.exports = { getMemberInfo, insertMemberInfo, deleteMemberInfo };
