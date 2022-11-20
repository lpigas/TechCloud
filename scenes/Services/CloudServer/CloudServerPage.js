import React, { useEffect, useState } from "react";
import TitleBlock from "../../../components/moleculs/Title/TitleBlock";
import Bottom from "../../../components/moleculs/Recall/Bottom";
import CenterCloud from "./CenterCloud";


export default function CloudServerPage({ serviceInfo }) {
  return (
    <>
      {serviceInfo && <TitleBlock partname={serviceInfo.partname} />}

      {serviceInfo && <CenterCloud data={serviceInfo} />}
      <div className="flex justify-center pb-24">
        <Bottom title={"Нужна помощь?"} buttonName={"Оставить заявку"} />
      </div>
    </>
  );
}
