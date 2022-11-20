import Link from "next/link";
import React from "react";
import Roundblur52 from "../../atoms/Rounds/Roundblur52";

export default function TitleBlock({ partname }) {
  return (
    <div className="flex mb-[87px] ">
      <div className="w-full ser:w-4/6  ser:mt-[87px] m-auto ">
        <div className="w-full hidden ser:flex">
          <p className="mx-4 flex font-normal not-italic  text-[14px] leading-[28px] text-[#616E87]">
            <Link href={"/"}> Главная </Link>
          </p>

          {partname &&
            partname.map((item, index) => (
              <div key={item.service_url} className={"flex"}>
                <p className="text-[#616E87]">/</p>
                <a
                  href={item.service_url}
                  className="mx-4 flex font-normal not-italic text-[14px] leading-[28px]"
                  style={{
                    color: `${
                      index === partname.length - 1 ? "#7166F9" : "#616E87"
                    }`,
                  }}
                >
                  {item.service_name}
                </a>
              </div>
            ))}
        </div>
        <div className="mt-[38px] flex font-bold not-italic breake-words text-[50px] ser:text-[60px] max-w-full leading-[70px] text-[#3E3F50]">
          <div className="flex">
            <div className="mt-[-20px] mr-[-16px]">
              <Roundblur52 color={"blue"} />
            </div>
            {partname && partname[partname.length - 1].service_name}
          </div>
        </div>
      </div>
    </div>
  );
}