import React from "react";
import Roundblur52 from "../../../../../components/atoms/Rounds/Roundblur52";
import About_1 from "../../text/About_1";
import About_2 from "../../text/About_2";
import MiniLogos from "./MinilogoBlock/MiniLogos";

export default function FullAboutUs() {
  return (
    <div className="max-w-full mt-[171px] mb-[42px] flex-col justify-center">
      <div className="flex">
        <div className="mt-[-25px] ml-[-40px] z-50">
          <Roundblur52 color={"violet"} />
        </div>
        <div className="ml-[-20px]">
          <About_1 />
        </div>
      </div>
      <div className="lg:w-3/5 sm:w-full mt-[42px]">
        <About_2 />
      </div>
      <div className="mt-[69px]">
        <MiniLogos />
      </div>
    </div>
  );
}
