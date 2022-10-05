import React, { useEffect, useState } from "react";
import TitleBlock from "../Components/TitleBlock";
import Bottom from "../../../components/moleculs/Recall/Bottom";
import CenterCloud from "./CenterCloud";
import Layout from "../../../components/layout/Layout";

export default function CloudServerPage({serviceInfo}) {

      
  return (
    <Layout minh={3005} title={serviceInfo && serviceInfo.title.name}>
      {serviceInfo && <TitleBlock partname={serviceInfo.partname} />}

      {serviceInfo && <CenterCloud data={serviceInfo} />}
      <div className="flex justify-center pb-24">
        <Bottom title={"Нужна помощь?"} buttonName={"Оставить заявку"} />
      </div>
    </Layout>
  );
}
