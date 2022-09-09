import Header from "../../components/layout/conponents/header/Header";
import Footer from "../../components/layout/conponents/footer/Footer";

import React, { useEffect, useState } from "react";
import TitleBlock from "./Components/TitleBlock";
import Bottom from "../../components/moleculs/Recall/Bottom";
import { useRouter } from "next/router";
import CenterCloud from "./CloudServer/CenterCloud";

export default function CloudServerPage({}) {
  const [serviceInfo, setServiceInfo] = useState();

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setServiceInfo(JSON.parse(window.localStorage.getItem("InfoData")));
    }
  }, []);

  return (
    <>
      <div
        className="w-[1920px] h-[3005px]"
        style={{
          background: "linear-gradient(90deg, #F6F8FC 0%, #ECF0FA 100%)",
        }}
      >
        <Header title={serviceInfo && serviceInfo.services.title.name} />
        {serviceInfo && <TitleBlock partname={serviceInfo.services.partname} />}

        <div className="absolute top-[2335px] left-[367px]">
          <Bottom title={"Нужна помощь?"} buttonName={"Оставить заявку"} />
        </div>
        {serviceInfo && <CenterCloud data={serviceInfo.services} />}
      </div>
      <div className={` w-[1187px] h-[347px] m-auto`}>
        <Footer />
      </div>
    </>
  );
}
