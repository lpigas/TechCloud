const { connectToDatabase } = require("../../lib/mongodb");
const bcrypt = require("bcryptjs");
const md5 = require("md5");
export default async function (req, res) {
  const { email, oldpass, newpass } = JSON.parse(req.body);
  const { db } = await connectToDatabase();
  const user = await db.collection("users").findOne({ email: email });
  const md5oldPass = md5(oldpass + process.env.SECRET_KEY);
  const md5newPass = md5(newpass + process.env.SECRET_KEY);
  const isMath = md5oldPass === user.password;
  if (!isMath) {
    return res.json({ message: "Старый пароль неверный, попробуйте снова" });
  }
  console.log("xhange user pass" + new Date());
  await db
    .collection("users")
    .updateOne({ email: email }, { $set: { password: md5newPass } });
  res.json({
    message: "ok",
  });
}
