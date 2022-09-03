const { connectToDatabase } = require("../../lib/mongodb");
const bcrypt = require("bcryptjs");

export default async function (req, res) {
  const { email, oldpass, newpass } = JSON.parse(req.body);
  const { db } = await connectToDatabase();
  const user = await db.collection("users").findOne({ email: email });

  const isMath = await bcrypt.compare(oldpass, user.password);
  if (!isMath) {
    return res.json({ message: "Старый пароль неверный, попробуйте снова" });
  }
  const newPassword = await bcrypt.hash(newpass, 10);
  await db
    .collection("users")
    .updateOne({ email: email }, { $set: { password: newPassword } });
  res.json({
    message: "ok",
  });
}
