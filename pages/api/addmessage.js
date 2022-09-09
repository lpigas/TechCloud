const { connectToDatabase } = require("../../lib/mongodb");

export default async function (req, res) {
  const { email, newCorespodense, numticket } = JSON.parse(req.body);
  const { db } = await connectToDatabase();
  const founduser = await db.collection("users").findOne({ email: email });
  const tickets = founduser.tickets;
  // tickets.push(newCorespodense)

  return res.json({
    message: numticket,
  });
}
