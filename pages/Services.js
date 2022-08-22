import React from "react";
import ServicesPage from "../scenes/Services/ServicesPage";
import clientPromise from "../lib/mongodb";

export default function Services({ data }) {
  return (
    <>
      <ServicesPage data={data} />
    </>
  );
}
export async function getServerSideProps() {
  const { connectToDatabase } = require("../lib/mongodb");
  const client = await clientPromise;
  let { db } = await connectToDatabase();
  const productInfo = await db.collection("Services").find().sort({}).toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(productInfo)),
    },
  };
}
