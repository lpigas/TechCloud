import jwt from "jsonwebtoken";
const { connectToDatabase } = require("../../lib/mongodb");
const bcrypt = require("bcryptjs");

export default async function (req, res) {
  const token = JSON.parse(req.body);
  let { db } = await connectToDatabase();
  const user = jwt.decode(token.token);

  const userdb = await db.collection("users").findOne({ email: user.email });
  const isMath = userdb.email === user.email;

  return res.json({
    message: isMath,
  });
}
