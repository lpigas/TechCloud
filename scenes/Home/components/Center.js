import React from "react";
import Bottom from "../../../components/moleculs/Recall/Bottom";
import FullAboutUs from "./Center/FullAboutUs";
import FullService from "./Center/FullService";
import Partners from "./Partners/Partners";

export default function Center() {
  return (
    <div>
      <div
        className="w-[1920px] h-[2779px]"
        style={{
          background:
            "linear-gradient(90deg, #F9F9FC 0%, #FCFCFD 33.33%, #FBFBFD 53.12%, #F6F6FA 100%)",
        }}
      >
        <FullAboutUs />
        <FullService />
        <Partners />
        <div className="absolute top-[2125px] left-[368px]">
          <Bottom title={"Стать клиентом"} buttonName={"Стать клиентом"} />
        </div>
      </div>
    </div>
  );
}
