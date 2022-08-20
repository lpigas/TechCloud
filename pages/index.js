import React from "react";
import HomePage from "../scenes/Home/HomePage";
import clientPromise from "../lib/mongodb";


export default function Aboute({data}) {
  return (
    <div>
      <HomePage/>
    </div>
  );
}

export async function getServerSideProps() {
  const client = await clientPromise;
  const { connectToDatabase } = require("../lib/mongodb");
  let { db } = await connectToDatabase();
const productInfo = await db
  .collection("Services")
  .find()
  .sort({})
  .toArray();

return {
  props: {
      data: JSON.parse(JSON.stringify(productInfo)),
  },
};
}
