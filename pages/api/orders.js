const { connectToDatabase } = require("../../lib/mongodb");
import { ObjectId } from "mongodb";

export default async function (req, res) {
  const { email } = JSON.parse(req.body);
  const { db } = await connectToDatabase();

  const user = await db.collection("users").findOne({ email: email });

  const allOrderdata = await db
    .collection("order")
    .find({ user: user._id })
    .toArray();
  console.log("get orders" + new Date());
  return res.json({
    orders: allOrderdata,
  });
}
