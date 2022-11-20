const { connectToDatabase } = require("../../lib/mongodb");
import { ObjectId } from "mongodb";

export default async function (req, res) {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString().slice(0, -3);
  const normalDate =
    date.slice(0, date.length - 4) + date.slice(date.length - 2, date.length);
  const { email, newCorespodense, numticket } = JSON.parse(req.body);
  const { db } = await connectToDatabase();
  const foundUser = await db.collection("users").findOne({ email: email });
  const id = foundUser._id;
  const foundTicket = await db
    .collection("ticket")
    .findOne({ user: new ObjectId(id), numTicket: numticket });
  const correspondence = foundTicket.correspondence;
  correspondence.push({
    ...newCorespodense,
    date: normalDate,
    time: time,
  });
  await db
    .collection("ticket")
    .updateOne({ _id: foundTicket._id }, { $set: { correspondence } });
  return res.json({
    message: correspondence,
  });
}
