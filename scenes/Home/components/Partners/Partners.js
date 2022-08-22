import React, { useState } from "react";
import { useEffect } from "react";
import Roundblur52 from "../../../../components/atoms/Rounds/Roundblur52";
import partners from "../../../../constants/About/partners.json";

export default function Partners() {
  const partnersData = partners.partnerInfo;
  const [outputinfo, setOutputinfo] = useState(partnersData);

  const changeLeft = () => {
    const newarr = outputinfo;
    const last = newarr[newarr.length - 1];
    newarr.pop();
    setOutputinfo([last, ...newarr]);
  };
  setTimeout(() => {
    changeLeft();
  }, 3000);

  return (
    <div className="w-[1222px] h-[223px] mt-[-200px] flex">
      <div className="absolute  left-[305px] top-[2365px]">
        <Roundblur52 color={"blue"} />
      </div>
      <p className="font-bold not-italic text-[50px] leading-[55px] text-[#3E3F50] z-10">
        Партнеры
      </p>
      <div className="flex w-full ml-[-255px]">
        <img
          src="/image/Buttons/Chevron/Chevron_Left_1.svg"
          width={"15"}
          height={"27"}
          alt={"Chevron_Left_1"}
        />
        {outputinfo &&
          outputinfo
            .slice(0, 4)
            .map((item) => (
              <img
                key={Math.random()}
                src={item.photourl}
                width={182}
                height={37}
                className={"mx-[62px]"}
              />
            ))}
        <img
          src="/image/Buttons/Chevron/Chevron_Right_1.svg"
          width={"15"}
          height={"27"}
          alt={"Chevron_Right_1"}
        />
      </div>
    </div>
  );
}
