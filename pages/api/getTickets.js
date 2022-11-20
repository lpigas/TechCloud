const { connectToDatabase } = require("../../lib/mongodb");


export default async function (req, res) {
  const { email } = JSON.parse(req.body);
  const { db } = await connectToDatabase();

  const user = await db.collection("users").findOne({ email: email });
  const allTickets = await db
    .collection("ticket")
    .find({ user: user._id })
    .toArray();
  return res.json({
    tickets: allTickets,
  });
}
