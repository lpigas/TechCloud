const { connectToDatabase } = require("../../lib/mongodb");

export default async function (req, res) {
  const token = JSON.parse(req.body).token;
  let { db } = await connectToDatabase();

  const foundToken = await db.collection("users").findOne({ token: token });
  if (!foundToken) {
    return res.json({ status: "500", message: "" });
  }

  // передать пароль для выброса с кабинета и очистка токена
  return res.json({
    message: "ok",
  });
}
