import Header from "../../components/layout/conponents/header/Header";
import Footer from "../../components/layout/conponents/footer/Footer";
import FormBlock from "./Components/FormBlock";
import TitleBlock from "./Components/TitleBlock";
import Bottom from "../../components/moleculs/Recall/Bottom";
import Head from "next/head";
import React from "react";

export default function FullServices({ data }) {
  const partname = [{ service_name: "Услуги", service_url: "/services" }];

  // console.log(data)
  return (
    <>
      <div
        className="w-[1920px] min-h-[2561px]"
        style={{
          background: "linear-gradient(90deg, #F6F8FC 0%, #ECF0FA 100%)",
        }}
      >
        <Header title={"Услуги"} />
        <TitleBlock partname={partname} />
        <FormBlock data={data} />
        <div className="flex mt-[123px] justify-center">
          <Bottom title={"Нужна помощь?"} buttonName={"Оставить заявку"} />
        </div>
        <div className="block h-[126px]" />
      </div>
      <Footer />
    </>
  );
}
