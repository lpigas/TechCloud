const { connectToDatabase } = require("../../lib/mongodb");

export default async function (req, res) {
  const { newTicket, allTickets, email } = JSON.parse(req.body);
  const { db } = await connectToDatabase();
  const date = new Date().toLocaleDateString();
  const user = await db.collection("users").findOne({ email: email });

  const newdata = await db.collection("ticket").insertOne({
    user: user._id,
    numTicket: newTicket.numTicket,
    date: date,
    groupe: newTicket.groupe,
    descr: newTicket.descr,
    correspondence: [],
    status: "new",
  });
  const userTickets = user.tickets;
  userTickets.unshift(newdata.insertedId);

  await db
    .collection("users")
    .updateOne({ email: email }, { $set: { tickets: userTickets } });
  return res.json({
    message: userTickets,
  });
}
