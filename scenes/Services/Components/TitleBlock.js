import Link from "next/link";
import React from "react";
import Roundblur52 from "../../../components/atoms/Rounds/Roundblur52";

export default function TitleBlock({ partname }) {




  return (
    <div className="flex ml-[369px]">
      <div className="absolute top-[218px] left-[334px] z-50">
        <Roundblur52 color={"blue"} />
      </div>
      <div className="w-[614px] h-[118px] mt-[175px] z-10 ">
        <div className="w-[579px] h-[56]  flex">
          <p className="mx-4 font-normal not-italic  text-[14px] leading-[28px] text-[#616E87]">
            <Link href={"/"}> Главная </Link>
          </p>
          {partname.map((item, index)=>

          <div key={Math.random()} className={'flex'}>
          <p className="text-[#616E87]">/</p>
          <a href={item.service_url} 
          className="mx-4 flex font-normal not-italic text-[14px] leading-[28px]" 
          style={{color:`${index===(partname.length-1)? '#7166F9':'#616E87'}`}}>
            {item.service_name}
          </a>
          
          </div>
          )}
        </div>
        <div className="mt-[38px] font-bold not-italic text-[65px] leading-[70px] text-[#3E3F50]">
          {partname[partname.length-1].service_name}
        </div>
      </div>
    </div>
  );
}
