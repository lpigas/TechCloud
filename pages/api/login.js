import jwt from "jsonwebtoken";
const { connectToDatabase } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;
const bcrypt = require("bcryptjs");

export default async function (req, res) {
  const { email, password } = JSON.parse(req.body);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  if (!validateEmail(email)) {
    return res.status(400).json({ message: "No enter or valid login" });
  }
  if (password.length < 1) {
    return res.status(400).json({ message: "No enter password" });
  }
  let { db } = await connectToDatabase();

  const user = await db.collection("users").findOne({ email: email });

  if (!user) {
    return res.status(400).json({ message: "You are not registred" });
  }

  const newPassword = await bcrypt.hash(password, 10);

  const isMath = await bcrypt.compare(password, user.password);
  if (!isMath) {
    return res.status(400).json({ message: "Wrong password" });
  }
  const token = jwt.sign(
    {
      email: user.email,
      password: user.password,
      name: user.name,
      sername: user.sername,
      phone: user.phone,
      role: user.role,
      urfis: user.urfis,
      balance: user.balance,
      country: user.country,
      city: user.city,
      orders: user.orders,
      tickets: user.tickets,
    },
    process.env.SECRET_KEY
  );
  await db
    .collection("users")
    .updateOne({ email: user.email }, { $set: { token } });

  res.json({
    message: newPassword,
    token: token,
  });
}
