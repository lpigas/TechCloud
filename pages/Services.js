import React from "react";
import ServicesPage from "../scenes/Services/ServicesPage";


export default function Services({ data }) {
  return (
    <>
      <ServicesPage data={data} />
    </>
  );
}
export async function getServerSideProps() {
  const { connectToDatabase } = require("../lib/mongodb");

  let { db } = await connectToDatabase();
  const productInfo = await db.collection("Services").find().sort({}).toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(productInfo)),
    },
  };
}
