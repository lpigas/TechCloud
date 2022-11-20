const { connectToDatabase } = require("../../lib/mongodb");
import jwt from "jsonwebtoken";
//error 0001 - wrong test payment
export default async function (req, res) {
  const { user } = JSON.parse(req.body);
  const email = user.email;
  const { db } = await connectToDatabase();

  const isRegistred = await db.collection("users").findOne({ email: email });

  if (!isRegistred) {
    return res.json({ error: "not registred" });
  }
  if (!isRegistred.orders) {
    return res.json({ error: "no orders" });
  }
  if (isRegistred.orders.length < 1) {
    return res.json({ error: "order lenght < 1" });
  }
  if (isRegistred.cart.length > 0) {
    return res.json({ error: "cart not empty" });
  }
  const token = jwt.sign(
    {
      email: isRegistred.email,
      name: isRegistred.name,
      surname: isRegistred.surname,
      phone: isRegistred.phone,
      role: isRegistred.role,
      urfis: isRegistred.urfis,
      balance: isRegistred.balance,
      country: isRegistred.country,
      city: isRegistred.city,
      orders: isRegistred.orders,
      tickets: isRegistred.tickets,
      cart: isRegistred.cart,
    },
    process.env.SECRET_KEY
  );

  res.json({
    message: token,
  });
}
