import React from "react";

import Footer from "../../components/layout/conponents/footer/Footer";
import Header from "../../components/layout/conponents/header/Header";
import TitleBlock from "./components/TitleBlock";
import Main from "./components/Main";
import Center from "./components/Center";

export default function Aboute({ data }) {
  return (
    <>
      <div className="w-[1920px] h-[3396px]">
        <div
          id="Rectangle1"
          style={{
            background: "linear-gradient(90deg, #F6F8FC 0%, #ECF0FA 100%)",
          }}
          className="-[1920px] h-[1080px] from-[#90deg, #F6F8FC_0%, #ECF0FA_100%]"
        >
          <Header title={"About"} />
          <div
            id="home__title"
            className="flex mt-[124px] ml-[469px] w-[983px] h-[346px]"
          >
            <TitleBlock />
          </div>
        </div>
        <Main />
        <Center />
        <div id="home__footer" className={` w-[1187px] h-[347px] m-auto`}>
          <Footer />
        </div>
      </div>
    </>
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
