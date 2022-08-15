import React from "react";
import Roundblur52 from "../../../../components/atoms/Rounds/Roundblur52";
import About_1 from "../Text/About_1";
import About_2 from "../Text/About_2";
import MiniLogos from "./MinilogoBlock/MiniLogos";

export default function FullAboutUs() {
  return (
    <div className="w-[1271px] h-[446px] absolute top-[1223px] left-[333px]">
      <div className="absolute top-[24px] left-[35px]">
        <About_1 />
      </div>
      <div className="top-[1223px]">
        <Roundblur52 color={"violet"} />
      </div>
      <div className="w-[882px] h-[136px] absolute top-[121px] left-[35px]">
        <About_2 />
      </div>
      <div className="absolute top-[326px] left-[35px]">
        <MiniLogos />
      </div>
    </div>
  );
}
