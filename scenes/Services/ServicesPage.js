import FormBlock from "./Components/FormBlock";
import TitleBlock from "../../components/moleculs/Title/TitleBlock";
import Bottom from "../../components/moleculs/Recall/Bottom";
import React from "react";
import Layout from "../../components/layout/Layout";
const serviceInfo = require("../../constants/About/dataul.json");

export default function ServicesPage({}) {
  const partname = [{ service_name: "Услуги", service_url: "/services" }];
  const servicesData = serviceInfo.services;
  return (
    <Layout minh={2561} title={"Услуги"}>
      <TitleBlock partname={partname} />
      <FormBlock servicesData={servicesData} />
      <div className="mt-[123px] pb-24">
        <Bottom title={"Нужна помощь?"} buttonName={"Оставить заявку"} />
      </div>
    </Layout>
  );
}
