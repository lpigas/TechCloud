import Head from "next/head";
import React from "react";
import Header from "../components/layout/conponents/header/Header";
import Footer from "../components/layout/conponents/footer/Footer";
import FormBlock from "../scenes/Services/FormBlock";
import TitleBlock from "../scenes/Services/TitleBlock";
import Bottom from "../scenes/Home/components/Bottom/Bottom";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <div
        className="w-[1920px] h-[2861px]"
        style={{
          background: "linear-gradient(90deg, #F6F8FC 0%, #ECF0FA 100%)",
        }}
      >
        <div id="home__header" className="absolute left-[368px] top-[-4px]">
          <Header />
        </div>
        <TitleBlock partname={"Услуги"} />
        <FormBlock />
        <div className="absolute top-[2220px] left-[367px]">
          <Bottom title={"Нужна помощь?"} buttonName={"Оставить заявку"} />
        </div>
      </div>

      <div
        id="Services__footer"
        className={`absolute w-[1187px] h-[347px] left-[368px] top-[2980px]`}
      >
        <Footer />
      </div>
    </>
  );
}
