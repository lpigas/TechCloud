import Image from "next/image";
import React from "react";
import Roundblur52 from "../../../components/atoms/Rounds/Roundblur52";
import ServicesDescr from "../../../components/moleculs/Description/ServicesDescr";

export default function CenterCloud({ data }) {
  return (
    <div className="w-[1184px] min-h-[1766px] flex m-auto ">
      <div className="mt-[72px] ml-[px]">
        <Image src={data.photourl} width={1184} height={539} className="" />
        <div className="ml-[139px]">
          <div className="w-[680px] h-[102px] mt-[100px] flex-wrap font-normal not-italic text-[20px] leading-[34px] text-[#616E87]">
            {data.topdescription}
          </div>
          <div className=" mt-[73px] mb-[41px] m-auto font-bold not-italic text-[50px] leading-[55px] text-[#3E3F50]">
            Как это работает?
          </div>
          <div className="w-[680px] min-h-[476px] ml-[101px]">
            {data.description.map((item, index) => (
              <ServicesDescr
                key={Math.random()}
                description={item}
                num={index}
              />
            ))}
          </div>
          <div className="font-bold mt-[113px] mb-[42px] not-italic text-[50px] leading-[55px] text-[#3E3F50]">
            Какие задачи решаем:
          </div>
          <div className="w-[781px] h-[170px] flex-wrap font-normal not-italic text-[20px] leading-[34px] text-[#616E87]">
            {data.tasks}
          </div>
        </div>
      </div>
    </div>
  );
}
