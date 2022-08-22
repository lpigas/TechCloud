import React from "react";
import Roundblur52 from "../../../../components/atoms/Rounds/Roundblur52";
import About_1 from "../Text/About_1";
import About_2 from "../Text/About_2";
import MiniLogos from "./MinilogoBlock/MiniLogos";

export default function FullAboutUs() {
  return (
    <div className="w-full mt-[171px] mb-[42px] flex-col justify-center h-[446px]">
      <div className="">
        <About_1 />
      </div>
      <div className="absolute top-[1190px] left-[320px]">
        <Roundblur52 color={"violet"} />
      </div>
      <div className="w-[882px] h-[136px] top-[121px] left-[35px]">
        <About_2 />
      </div>
      <div className="top-[326px] left-[35px]">
        <MiniLogos />
      </div>
    </div>
  );
}
