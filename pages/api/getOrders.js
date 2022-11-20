const { connectToDatabase } = require("../../lib/mongodb");
import { ObjectId } from "mongodb";

export default async function (req, res) {
  const { email } = JSON.parse(req.body);
  const { db } = await connectToDatabase();

  const user = await db.collection("users").findOne({ email: email });

  const allOrders = await db
    .collection("order")
    .find({ user: new ObjectId(user._id) })
    .toArray();
  const allOrderdata = allOrders.sort((a, b) =>
    b.numOrder.localeCompare(a.numOrder)
  );

  return res.json({
    orders: allOrderdata,
  });
}
