import React from "react";
import Head from "next/head";
import Footer from "../../components/layout/conponents/footer/Footer";
import Header from "../../components/layout/conponents/header/Header";
import TitleBlock from "./TitleBlock";
import Main from "./components/Main";
import Center from "./components/Center";

export default function Aboute() {
  return (
    <>
      <Head>
        <title>Aboute</title>
      </Head>
      <div className="relative w-[1920px] h-[4396px]">
        <div
          id="Rectangle1"
          style={{
            background: "linear-gradient(90deg, #F6F8FC 0%, #ECF0FA 100%)",
          }}
          className="absolute top-[8px] left-0 w-[1920px] h-[1080px] from-[#90deg, #F6F8FC_0%, #ECF0FA_100%]"
        >
          <div id="home__header" className="absolute left-[368px] top-[-4px]">
            <Header />
          </div>
          <div
            id="home__title"
            className="absolute left-[469px] top-[180px] w-[983px] h-[346px]"
          >
            <TitleBlock />
          </div>
        </div>
        <Main />
        <div className="absolute top-[1079px] left-0">
          <Center />
        </div>

        <div
          id="home__footer"
          className={`absolute w-[1187px] h-[347px] left-[368px] top-[3975px]`}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}
