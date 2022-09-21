import React from "react";
import Bottom from "../../../../components/moleculs/Recall/Bottom";
import FullAboutUs from "./components/FullAboutUs";
import FullService from "./components/FullService";
import Partners from "../partners/Partners";

export default function Center() {
  return (
    <div className="flex w-full">
      <div
        className=" w-full"
        style={{
          background:
            "linear-gradient(90deg, #F9F9FC 0%, #FCFCFD 33.33%, #FBFBFD 53.12%, #F6F6FA 100%)",
        }}
      >
        <div className="w-full lg:w-11/12 lg:max-w-[1500px] pb-[137px] m-auto">
          <FullAboutUs />
          <FullService />
          <Partners />
        </div>

        <div className="flex justify-center pb-24">
          <Bottom title={"Стать клиентом"} buttonName={"Стать клиентом"} />
        </div>
      </div>
    </div>
  );
}
