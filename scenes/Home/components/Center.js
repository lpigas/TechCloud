import React from "react";
import FullAboutUs from "./Center/FullAboutUs";
import FullService from "./Center/FullService";

export default function Center() {
  return (
    <div>
      <div
        className="w-[1936px] h-[2778px]"
        style={{
          background:
            "linear-gradient(90deg, #F9F9FC 0%, #FCFCFD 33.33%, #FBFBFD 53.12%, #F6F6FA 100%)",
        }}
      >
        <FullAboutUs />
        <FullService />
      </div>
    </div>
  );
}
