import React from "react";
import Bottom from "../../../components/moleculs/Recall/Bottom";
import FullAboutUs from "./Center/FullAboutUs";
import FullService from "./Center/FullService";
import Partners from "./Partners/Partners";

export default function Center() {
  return (
    <div className="flex w-full">
      <div
        className="mt-[-520px] w-full"
        style={{
          background:
            "linear-gradient(90deg, #F9F9FC 0%, #FCFCFD 33.33%, #FBFBFD 53.12%, #F6F6FA 100%)",
        }}
      >
        <div className="w-[1241px] mb-[137px] ml-[336px]">
          <FullAboutUs />
          <FullService />
          <Partners />
        </div>

        <div className="flex justify-center">
          <Bottom title={"Стать клиентом"} buttonName={"Стать клиентом"} />
        </div>
      </div>
    </div>
  );
}
