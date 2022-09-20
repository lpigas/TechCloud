import { useRouter } from "next/router";
import React from "react";
import Roundblur100 from "../../atoms/Rounds/Roundblur100";
import RoundBlur50 from "../../atoms/Rounds/RoundBlur50";

export default function ServicesForms({
  color,
  imageRound,
  bigImage,
  title,
  onClick,
  data,
}) {
  const router = useRouter();
  return (
    <div
      className={`lg:max-w-50vw lg:min-w-50vh xl:max-w-35vw xl:min-w-35vw  sm:min-w-75vh sm:max-w-75vh flex mr-[28px] mb-[27px] bg-[#FFFFFF] rounded-[20px]`}
    >
      <div className="min-w-[275px] min-h-[409px]">
        <img src={bigImage} />
      </div>

      <div className="font-medium ml-[30px] not-italic h-[409px] flex flex-col justify-between text-[20px] leading-[28px] text-[#3E3F50]">
        <div className={`mt-[47px] ml-[-1px] mb-[43px]`}>
          <Roundblur100 color={color}>
            <RoundBlur50 color={color}>
              <img src={imageRound} />
            </RoundBlur50>
          </Roundblur100>
        </div>{" "}
        {title}
        <div
          onClick={() => onClick(data)}
          className="cursor-pointer flex mb-4 items-end"
        >
          <p className="flex">
            Подробнее об услуге
            <img src="/image/Arrows/Arrow_3.svg" width={"16.5"} className="mx-6"/>
          </p>
        </div>
      </div>
    </div>
  );
}
