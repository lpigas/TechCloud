import React from "react";
import ServicesDescr from "../../../components/moleculs/Description/ServicesDescr";

export default function CenterCloud({ data }) {
  return (
    <div className="ser:w-11/12 max-w-full px-1 mb-10 flex m-auto ">
      <div className="mt-[72px] w-full ">
        <img src={data.photourl} className="w-full ser:w-4/5 m-auto" />
        <div className="ser:w-4/5  m-auto">
          <div className="w-full ser:w-[680px] m-auto mt-[100px] flex-wrap font-normal not-italic text-[20px] leading-[34px] text-[#616E87]">
            {data.topdescription}
          </div>
          <div className=" mt-[73px] w-full ser:w-[680px] mb-[41px] m-auto font-bold not-italic text-[50px] leading-[55px] text-[#3E3F50]">
            Как это работает?
          </div>
          <div className="w-full ser:w-[680px] m-auto ">
            {data.description.map((item, index) => (
              <ServicesDescr
                key={Math.random()}
                description={item}
                num={index}
              />
            ))}
          </div>
          <div className="font-bold w-full ser:w-[680px] m-auto  mt-[113px] mb-[42px] not-italic text-[50px] leading-[55px] text-[#3E3F50]">
            Какие задачи решаем:
          </div>
          <div className="w-full ser:w-[680px] m-auto  flex-wrap font-normal not-italic text-[20px] leading-[34px] text-[#616E87]">
            {data.tasks}
          </div>
        </div>
      </div>
    </div>
  );
}
