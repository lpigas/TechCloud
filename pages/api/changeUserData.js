import jwt from "jsonwebtoken";
const { connectToDatabase } = require("../../lib/mongodb");

export default async function (req, res) {
  const { email, name, surname, urfis, phone, country, city } = JSON.parse(
    req.body
  );
  if (name.length < 2) {
    return res.json({ status: 404, message: "Не верный формат имени" });
  }
  if (surname.length < 2) {
    return res.json({ status: 404, message: "Не верный формат фамилии" });
  }

  const { db } = await connectToDatabase();

  const user = await db.collection("users").findOne({ email: email });

  await db
    .collection("users")
    .updateOne(
      { email: email },
      { $set: { email, name, surname, urfis, phone, country, city } }
    );
  const newUserData = await db.collection("users").findOne({ email: email });
  const token = jwt.sign(
    {
      email: newUserData.email || "",
      password: newUserData.password || "",
      name: newUserData.name || "",
      surname: newUserData.surname || "",
      phone: newUserData.phone || "",
      role: newUserData.role || "",
      urfis: newUserData.urfis || "",
      balance: newUserData.balance || "",
      country: newUserData.country || "",
      city: newUserData.city || "",
      orders: newUserData.orders || "",
      tickets: newUserData.tickets || "",
    },
    process.env.SECRET_KEY
  );
  await db
    .collection("users")
    .updateOne({ email: user.email }, { $set: { token } });
  res.json({
    message: "ok",
    token: token,
  });
}
