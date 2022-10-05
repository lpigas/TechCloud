const { connectToDatabase } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function (req, res) {
  const { user, order } = JSON.parse(req.body);
  const { db } = await connectToDatabase();
  const date = new Date().toLocaleDateString();
  const isRegistred = await db
    .collection("users")
    .findOne({ email: user.email });
  const totalsum = order.reduce((a, b) => a + b.pcs * b.price, 0);

  if (isRegistred) {
    const _id = isRegistred._id;
    const orders = isRegistred.orders;
    let numOrder = String(orders.length + 1);
    for (let i = numOrder.length; i <= 6; i++) {
      numOrder = "0" + numOrder;
    }

    const newdata = await db.collection("order").insertOne({
      user: new ObjectId(_id),
      numOrder: "#" + numOrder,
      date: date,
      products: order,
      sum: totalsum,
      status: "wait",
    });
    orders.push(newdata.insertedId);
    await db
      .collection("users")
      .updateOne({ email: user.email }, { $set: { orders: orders } });
    return res.json({ message: "ok" });
  } else {
    let numOrder = "1";
    for (let i = numOrder.length; i <= 6; i++) {
      numOrder = "0" + numOrder;
    }
    const newUser = await db.collection("users").insertOne({
      ...user,
      role: "user",
      orders: [],
      tickets: [],
      balance: "0",
    });
    const newOrder = await db.collection("order").insertOne({
      user: new ObjectId(newUser.insertedId),
      numOrder: "#" + numOrder,
      date: date,
      products: order,
      sum: totalsum,
      status: "wait",
    });

    await db
      .collection("users")
      .updateOne(
        { _id: new ObjectId(newUser.insertedId) },
        { $set: { orders: [new ObjectId(newOrder.insertedId)] } }
      );
    return res.json({ message: "ok" });
  }
}
