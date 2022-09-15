import React from "react";
import TitleBlock from "./components/TitleBlock";
import Main from "./components/main/Main";
import Center from "./components/center/Center";
import Layout from "../../components/layout/Layout";

export default function Aboute({ data }) {
  const conponent = (
    <div className="w-full">
      <Center />{" "}
    </div>
  );
  return (
    <Layout minh={1500} title="home" component={conponent}>
      <TitleBlock />
      <Main />
    </Layout>
  );
}
export async function getServerSideProps() {
  const client = await clientPromise;
  // const { connectToDatabase } = require("../lib/mongodb");
  let { db } = await connectToDatabase();
  const productInfo = await db.collection("Services").find().sort({}).toArray();

  return {
    props: {
      data: productInfo,
    },
  };
}
