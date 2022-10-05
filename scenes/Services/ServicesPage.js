import FormBlock from "./Components/FormBlock";
import TitleBlock from "./Components/TitleBlock";
import Bottom from "../../components/moleculs/Recall/Bottom";
import React from "react";
import Layout from "../../components/layout/Layout";
const serviceInfo = require("../../constants/About/dataul.json");

export default function ServicesPage({}) {
  const partname = [{ service_name: "Услуги", service_url: "/services" }];
  const datas = serviceInfo.services;
  // console.log(datas);
  return (
    <Layout minh={2561} title={"Услуги"}>
      <TitleBlock partname={partname} />
      <FormBlock data={datas} />
      <div className="mt-[123px] pb-24">
        <Bottom title={"Нужна помощь?"} buttonName={"Оставить заявку"} />
      </div>
    </Layout>
  );
}
