const { connectToDatabase } = require("../../lib/mongodb");

export default async function (req, res) {
  const { email, cart } = JSON.parse(req.body);
  const { db } = await connectToDatabase();

  const user = await db.collection("users").findOne({ email });

  if (user) {
    await db
      .collection("users")
      .updateOne({ _id: user._id }, { $set: { cart: cart } });
  }

  res.json({
    message: "ok",
  });
}
