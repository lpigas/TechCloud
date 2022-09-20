import React from "react";
import Roundblur120 from "../../../atoms/Rounds/RoundBlur120";
import Roundblur70 from "../../../atoms/Rounds/RoundBlur70";

export default function Cloud_Friend() {
  return (
    <div className="w-[426px] max-w-full flex items-center">
      <Roundblur120 color={"violet"}>
        <Roundblur70 color={"violet"}>
          <img
            src="/image/cloud/friends.png"
            width={36}
            height={36}
            alt="Friends"
          />
        </Roundblur70>
      </Roundblur120>
      <div>
        <p className="font-normal not-italic text-[40px] leading-[24px] text-[#3E3F50] m-[17px] z-10">
          500+
        </p>
        <p className="font-normal not-italic text-[16px] leading-[22px] text-[#616E87] mx-[17px] z-10">
          Клиентов по всему миру
        </p>
      </div>
    </div>
  );
}
