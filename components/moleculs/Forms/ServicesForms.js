import React from "react";
import Roundblur100 from "../../atoms/Rounds/Roundblur100";
import RoundBlur50 from "../../atoms/Rounds/RoundBlur50";

export default function ServicesForms({
  color,
  imageRound,
  top,
  left,
  bigImage,
  title,
}) {
  return (
    <div className={`w-[578px] h-[409px] bg-[#FFFFFF] rounded-[20px]`}>
      <div className={`absolute top-[47px] left-[303px]`}>
        <Roundblur100 color={color}>
          <RoundBlur50 color={color}>
            <img src={imageRound} />
          </RoundBlur50>
        </Roundblur100>
      </div>
      <div className="w-[275px] h-[409px]">
        <img src={bigImage} />
      </div>
      <div className="absolute top-[190px] left-[303px] font-medium not-italic text-[20px] leading-[28px] text-[#3E3F50]">
        {" "}
        {title}
      </div>
      <div className="flex absolute top-[338px] left-[305px] items-center">
        <p className="mx-4 ">Подробнее об услуге</p>
        <img src="/image/Arrows/Arrow_3.svg" width={"16.5"} />
      </div>
    </div>
  );
}
