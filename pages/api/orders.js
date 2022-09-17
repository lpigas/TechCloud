const { connectToDatabase } = require("../../lib/mongodb");
import jwt from "jsonwebtoken";

export default async function (req, res) {
  const { email } = JSON.parse(req.body);
  const { db } = await connectToDatabase();

  const user = await db.collection("users").findOne({ email: email });
  const orders = user.orders;
  const tickets = user.tickets;
  return res.json({
    orders: orders,
    tickets: tickets,
  });
}
