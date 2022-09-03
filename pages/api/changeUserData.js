import jwt from "jsonwebtoken";
const { connectToDatabase } = require("../../lib/mongodb");

export default async function (req, res) {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const {
    oldemail,
    email,
    name,
    sername,
    urfis,
    phone,
    country,
    city,
    oldtoken,
  } = JSON.parse(req.body);
  const validationEmail = validateEmail(email);
  if (!validationEmail) {
    return res.json({ status: 404, message: "Не верный формат Email" });
  }
  if (name.length < 2) {
    return res.json({ status: 404, message: "Не верный формат именм" });
  }
  if (sername.length < 2) {
    return res.json({ status: 404, message: "Не верный формат фамилии" });
  }
  if (urfis.length < 1) {
    return res.json({ status: 404, message: "Не выбран тип пользователя" });
  }
  if (phone.length < 10) {
    return res.json({
      status: 404,
      message: "Не верно выбран формат телефона",
    });
  }

  const { db } = await connectToDatabase();
  const user = await db.collection("users").findOne({ email: email });

  await db
    .collection("users")
    .updateOne(
      { email: oldemail },
      { $set: { email, name, sername, urfis, phone, country, city } }
    );
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

  res.json({
    message: "ok",
    token: token,
  });
}
