import Header from "../../components/layout/conponents/header/Header";
import Footer from "../../components/layout/conponents/footer/Footer";
import FormBlock from "./Components/FormBlock";
import TitleBlock from "./Components/TitleBlock";
import Bottom from "../../components/moleculs/Recall/Bottom";
import Head from "next/head";
import React from "react";
import Layout from "../../components/layout/Layout";

export default function ServicesPage({ data }) {
  const partname = [{ service_name: "Услуги", service_url: "/services" }];

  console.log(data)
  return (
    <Layout minh={2561} title={"Услуги"}>
      <TitleBlock partname={partname} />
      <FormBlock data={data} />
      <div className="mt-[123px] pb-24">
        <Bottom title={"Нужна помощь?"} buttonName={"Оставить заявку"} />
      </div>
    </Layout>
  );
}
