const { connectToDatabase } = require("../../lib/mongodb");
import jwt from "jsonwebtoken";

export default async function (req, res) {

  const data = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString().slice(0, -3);
    const normaldata =
      data.slice(0, data.length - 4) + data.slice(data.length - 2, data.length);
  const { email, newCorespodense, numticket } = JSON.parse(req.body);
  const { db } = await connectToDatabase();
  const founduser = await db.collection("users").findOne({ email: email });
  const tickets = founduser.tickets;
  const index = tickets.findIndex(item => item.numTicket===numticket )

  tickets[index].correspondence.push({...newCorespodense, data:normaldata, time:time})
  await db.collection("users").updateOne({ email: email },{$set:{tickets:tickets}})
  const user = await db.collection("users").findOne({ email: email });
  const token = jwt.sign(
    {
      email: user.email,
      password: user.password,
      name: user.name,
      sername: user.sername,
      phone: user.phone,
      role: user.role,
      urfis: user.urfis,
      balance: user.balance,
      country: user.country,
      city: user.city,
      orders: user.orders,
      tickets: user.tickets,
    },
    process.env.SECRET_KEY
  );
  await db
    .collection("users")
    .updateOne({ email: user.email }, { $set: { token } });

  return res.json({
    message: 'ok',
    token:token
  });
}
