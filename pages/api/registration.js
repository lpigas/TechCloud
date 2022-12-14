const { connectToDatabase } = require("../../lib/mongodb");
const bcrypt = require("bcryptjs");
const { createHash } = require("crypto");

export default async function (req, res) {
  const { newUser } = JSON.parse(req.body);
  const newPass = await bcrypt.hash(newUser.password, 10);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  if (!validateEmail(newUser.email)) {
    return res.json({ status: 404, message: "Wrong e-mail" });
  }
  if (newUser.password.length < 3) {
    return res.json({ status: 404, message: "Wrong password" });
  }
  if (newUser.phone.length < 3) {
    return res.json({
      status: 404,
      message: "Wrong phone",
    });
  }
  if (newUser.name.length < 2) {
    return res.json({ status: 404, message: "Wrong name" });
  }
  const { db } = await connectToDatabase();
  const candidate = await db
    .collection("users")
    .findOne({ email: newUser.email });
  if (candidate) {
    return res.json({
      status: 404,
      message: "This user are registred try login",
    });
  }
  const balance = btoa("0");
  const userIn = {
    role: "user",
    sername: newUser.sername || "",
    balance: balance,
    orders: [],
    tickets: [],
    password: newPass,
    name: newUser.name,
    email: newUser.email,
    country: newUser.country || "",
    city: newUser.city || "",
    urfis: newUser.urfis || "",
    phone: newUser.phone,
  };
  await db.collection("users").insertOne(userIn);
  res.json({
    message: "ok",
    info: newPass,
  });
}
