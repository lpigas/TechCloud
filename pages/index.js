import React from "react";
import Head from "next/head";
import Button from "../components/atoms/Buttons/Button/Button";
import Footer from "../components/layout/conponents/footer/Footer";
import Header from "../components/layout/conponents/header/Header";

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
          <Header />
        </div>

        <Footer left={368} top={3975} />
      </div>
    </>
  );
}
