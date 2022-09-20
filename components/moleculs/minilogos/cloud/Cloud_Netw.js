import React from "react";
import Roundblur120 from "../../../atoms/Rounds/RoundBlur120";
import Roundblur70 from "../../../atoms/Rounds/RoundBlur70";

export default function Cloud_Netw() {
  return (
    <div className="w-[426px] max-w-full flex items-center">
      <Roundblur120 color={"orange"}>
        <Roundblur70 color={"orange"}>
          <img
            src="/image/cloud/network.png"
            width={37}
            height={37}
            alt="network"
          />
        </Roundblur70>
      </Roundblur120>
      <div>
        <p className="font-normal not-italic text-[40px] leading-[24px] text-[#3E3F50] m-[17px] z-10">
          50+
        </p>
        <p className="font-normal not-italic text-[16px] leading-[22px] text-[#616E87] mx-[17px] z-10">
          Услуги предлагаем
        </p>
      </div>
    </div>
  );
}
