import jwt from "jsonwebtoken";
const { connectToDatabase } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function (req, res) {
  const { userAuth } = JSON.parse(req.body);
  const { db } = await connectToDatabase();
  const candidate = await db
    .collection("users")
    .findOne({ email: userAuth.email });
  if (candidate === null) {
    const balance = btoa(0);
    const userIn = {
      role: "user",
      surname: userAuth.surname || "",
      balance: balance,
      orders: [],
      tickets: [],
      name: userAuth.name,
      email: userAuth.email,
      country: userAuth.country || "",
      city: userAuth.city || "",
      urfis: userAuth.urfis || "",
      phone: userAuth.phone,
      cart: userAuth.cart || [],
    };
    await db.collection("users").insertOne(userIn);
  }
  const user = await db.collection("users").findOne({ email: userAuth.email });
  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
      surname: user.surname,
      phone: user.phone,
      role: user.role,
      urfis: user.urfis,
      balance: user.balance,
      country: user.country,
      city: user.city,
      orders: user.orders,
      tickets: user.tickets,
      cart: user.cart || [],
    },
    process.env.SECRET_KEY
  );

  res.json({
    token: token,
  });
}
