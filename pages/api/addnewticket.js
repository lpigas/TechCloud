const { connectToDatabase } = require("../../lib/mongodb");
import jwt from "jsonwebtoken";

export default async function (req, res) {
  const { allTickets, email } = JSON.parse(req.body);
  const { db } = await connectToDatabase();

  await db
    .collection("users")
    .updateOne({ email: email }, { $set: { tickets: allTickets } });
  const newUserData = await db.collection("users").findOne({ email: email });
  const token = jwt.sign(
    {
      email: newUserData.email || "",
      password: newUserData.password || "",
      name: newUserData.name || "",
      sername: newUserData.sername || "",
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
  await db.collection("users").updateOne({ email: email }, { $set: { token } });

  return res.json({
    message: allTickets,
    token,
  });
}
