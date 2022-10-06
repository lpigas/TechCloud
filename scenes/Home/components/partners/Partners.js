import React, { useState } from "react";
import { useEffect } from "react";
import Roundblur52 from "../../../../components/atoms/Rounds/Roundblur52";
import partners from "../../../../constants/About/partners.json";

export default function Partners() {
  const partnersData = partners.partnerInfo;
  const [outputinfo, setOutputinfo] = useState(partnersData);

  const changeLeft = () => {
    const firstLater = outputinfo[0];
    const sliced = outputinfo.slice(1);
    setOutputinfo([...sliced, firstLater]);
  };

  useEffect(() => {
    const interval = setInterval(() => changeLeft(), 1000);
    return () => clearInterval(interval);
  }, [outputinfo]);
  console.log(outputinfo);
  return (
    <div className="sm:hidden xl:flex w-full  mt-[145px]  flex-col">
      <div className="flex">
        <div className="ml-[-30px] z-50">
          <Roundblur52 color={"blue"} />
        </div>
        <div className="ml-[-15px]  z-0 mt-[20px] font-bold not-italic text-[50px] leading-[55px] text-[#3E3F50] ">
          Партнеры
        </div>
      </div>
      <div className="flex w-full justify-center  mt-[100px]">
        <img
          src="/image/Buttons/Chevron/Chevron_Left_1.svg"
          width={"15"}
          height={"27"}
          alt={"Chevron_Left_1"}
        />
        {outputinfo &&
          outputinfo
            .slice(0, 4)
            .map(
              (item) =>
                item && (
                  <img
                    key={item.alt}
                    src={item.photourl}
                    width={182}
                    height={37}
                    className={"mx-[62px]"}
                  />
                )
            )}
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
