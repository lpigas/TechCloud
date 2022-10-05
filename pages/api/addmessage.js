const { connectToDatabase } = require("../../lib/mongodb");
import { ObjectId } from "mongodb";

export default async function (req, res) {
  const data = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString().slice(0, -3);
  const normaldata =
    data.slice(0, data.length - 4) + data.slice(data.length - 2, data.length);
  const { email, newCorespodense, numticket } = JSON.parse(req.body);
  const { db } = await connectToDatabase();
  const founduser = await db.collection("users").findOne({ email: email });
  const id = founduser._id;
  const foundTicket = await db
    .collection("ticket")
    .findOne({ user: new ObjectId(id), numTicket: numticket });
  const correspondence = foundTicket.correspondence;
  correspondence.push({
    ...newCorespodense,
    data: normaldata,
    time: time,
  });
  await db
    .collection("ticket")
    .updateOne({ _id: foundTicket._id }, { $set: { correspondence } });
  console.log("add message" + new Date());
  return res.json({
    message: correspondence,
  });
}
