const { connectToDatabase } = require("../../lib/mongodb");
import jwt from "jsonwebtoken";

export default async function (req, res) {
  const { newTicket, allTickets, email } = JSON.parse(req.body);
  const { db } = await connectToDatabase();
  const date = new Date().toLocaleDateString();
  const user = await db.collection("users").findOne({ email: email });

  const newdata = await db.collection("Tickets").insertOne({
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
  console.log("add new ticket" + new Date());
  return res.json({
    message: userTickets,
  });
}
