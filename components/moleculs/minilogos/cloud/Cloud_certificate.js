import React from "react";
import Roundblur120 from "../../../atoms/Rounds/RoundBlur120";
import Roundblur70 from "../../../atoms/Rounds/RoundBlur70";

export default function Cloud_certificate() {
  return (
    <div className="w-[426px] max-w-full flex items-center">
      <Roundblur120 color={"blue"}>
        <Roundblur70 color={"blue"}>
          <img
            src="/image/cloud/certificate.png"
            width={43}
            height={43}
            alt="Certificate"
          />
        </Roundblur70>
      </Roundblur120>
      <div>
        <p className="font-normal not-italic text-[40px] leading-[24px] text-[#3E3F50] m-[17px] z-10">
          12+
        </p>
        <p className="font-normal not-italic text-[16px] leading-[22px] text-[#616E87] mx-[17px] z-10">
          Лет опыта работы
        </p>
      </div>
    </div>
  );
}
