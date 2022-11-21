const { connectToDatabase } = require("../../lib/mongodb");
import { ObjectId } from "mongodb";
import { redirect } from "next/dist/server/api-utils";
import { createRedirectRoute } from "next/dist/server/server-route-utils";

export default async function (req, res) {
  function parseJwt(token) {
    var base64Url = token.split(".")[0];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
  const body = req.body.data;
  const fullInfoPayment = parseJwt(body);
  const orderInfo = JSON.parse(fullInfoPayment.info);
  const userData = orderInfo.userInfo;
  const cart = orderInfo.product;
  const status = fullInfoPayment.status;
  const order_id = fullInfoPayment.order_id;
  const date = new Date().toLocaleDateString();
  const { db } = await connectToDatabase();
  
  const isRegistred = await db
    .collection("users")
    .findOne({ email: userData.email });
  if (!isRegistred) {
    const balance = btoa("0");
    const userIn = {
      email: userData.email,
      role: "user",
      name: userData.name,
      surname: newUser.surname || "",
      country: userData.country || "",
      urfis: "Физическое лицо",
      balance: balance,
      phone: userData.phone,
      city: userData.city || "",
      orders: [],
      tickets: [],
      cart: [],
    };
    await db.collection("users").insertOne(userIn);
  }
  const userDB = await db
    .collection("users")
    .findOne({ email: userData.email });

  const hasOrder = await db
    .collection("order")
    .findOne({ numOrder: order_id, user: new ObjectId(userDB._id) });
  if (hasOrder) {
    await db
      .collection("order")
      .updateOne(
        { numOrder: order_id },
        {
          $set: {
            status:
              status === "success"
                ? "ok"
                : status === "captcha_verify" ||
                  "cvv_verify" ||
                  "password_verify" ||
                  "phone_verify" ||
                  "pin_verify" ||
                  "receiver_verify" ||
                  "sender_verify" ||
                  "senderapp_verify" ||
                  "wait_qr" ||
                  "wait_sender"
                ? "wait"
                : "cancel",
          },
        }
      );
  } else {
    const orders = userDB.orders;
    //если нет заказа
    //add new order
    const newOrder = await db.collection("order").insertOne({
      user: new ObjectId(userDB._id),
      numOrder: order_id,
      date: date,
      products: cart,
      sum: fullInfoPayment.amount,
      status:
        status === "success"
          ? "ok"
          : status === "captcha_verify" ||
            "cvv_verify" ||
            "password_verify" ||
            "phone_verify" ||
            "pin_verify" ||
            "receiver_verify" ||
            "sender_verify" ||
            "senderapp_verify" ||
            "wait_qr" ||
            "wait_sender"
          ? "wait"
          : "cancel",

      //add new order at user
    });

    orders.unshift(newOrder.insertedId);
    await db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(userDB._id) },
        { $set: { orders: orders } }
      );
    console.log("чистим корзину");
    await db
      .collection("users")
      .updateOne({ email: userData.email }, { $set: { cart: [] } });
  }

  res.json({
    status: 301,
    statusCode: 301
  });
}
