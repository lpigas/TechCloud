import Link from "next/link";
import React from "react";
import Roundblur52 from "../../components/atoms/Rounds/Roundblur52";

export default function TitleBlock({ partname }) {
  return (
    <>
      <div className="absolute top-[218px] left-[334px] z-50">
        <Roundblur52 color={"blue"} />
      </div>
      <div className="w-[614px] h-[118px] absolute top-[175px] left-[369px] z-10">
        <div className="w-[579px] h-[56] flex">
          <p className="mx-4 font-normal not-italic text-[14px] leading-[28px] text-[#616E87]">
            <Link href={"/"}> Главная </Link>
          </p>
          <p className="text-[#616E87]">/</p>
          <p className="mx-4 font-normal not-italic text-[14px] leading-[28px] text-[#7166F9]">
            {partname}
          </p>
        </div>
        <div className="absolute top-[58px] left-[-1px] font-bold not-italic text-[65px] leading-[70px] text-[#3E3F50]">
          {partname}
        </div>
      </div>
    </>
  );
}
