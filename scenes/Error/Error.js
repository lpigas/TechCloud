import React from "react";
import Header from "../../components/layout/conponents/header/Header";
import Footer from "../../components/layout/conponents/footer/Footer";
import TitleBlock from "./Components/TitleBlock";

export default function Error() {
  const partname = [{ service_name: "Упс! Страница не найдена" }];
  return (
    <>
      <div
        className="w-[1920px] min-h-[1261px]"
        style={{
          background: "linear-gradient(90deg, #F6F8FC 0%, #ECF0FA 100%)",
        }}
      >
        <Header title={"404"} />
        <TitleBlock partname={partname} />
      </div>
      <div className={` w-[1187px] h-[347px] m-auto`}>
        <Footer />
      </div>
    </>
  );
}
