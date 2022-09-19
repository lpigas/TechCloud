import React from "react";
import Roundblur52 from "../../../../../components/atoms/Rounds/Roundblur52";
import About_1 from "../../Text/About_1";
import About_2 from "../../Text/About_2";
import MiniLogos from "./MinilogoBlock/MiniLogos";

export default function FullAboutUs() {
  return (
    <div className="max-w-full mt-[171px] mb-[42px] flex-col justify-center h-[446px]">
      <div className="flex">
        <div className="mt-[-25px] ml-[-40px] z-50">
          <Roundblur52 color={"violet"} />
        </div>
        <div className="ml-[-20px]">
          <About_1 />
        </div>
      </div>
      <div className="w-9/10 mt-[42px]">
        <About_2 />
      </div>
      <div className="mt-[69px] sm:hidden lg:flex">
        <MiniLogos />
      </div>
    </div>
  );
}
