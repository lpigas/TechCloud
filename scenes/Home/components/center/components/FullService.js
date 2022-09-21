import React, { useEffect, useState } from "react";
import Roundblur52 from "../../../../../components/atoms/Rounds/Roundblur52";
import CloudUl from "./Ul/CloudUl";
import Service_ul from "./Ul/Service_ul";
import PhotoUl from "./Ul/PhotoUl";
import TextUl from "./Ul/TextUl";
import dataul from "../../../../../constants/About/dataul.json";
import Button from "../../../../../components/atoms/Buttons/Button/Button";

export default function FullService() {
  const services = dataul.services;
  const [changedLi, setChangedLi] = useState(services[0]);
  
  return (
    <div className="max-w-full flex flex-col">
      <div className="flex w-full font-bold not-italic text-[50px] leading-[55px] text-[#3E3F50] z-10 relative">
        <div className="mr-[-15px] mt-[-15px]">
          <Roundblur52 color={"orange"} />
        </div>
        Наши услуги
      </div>

      <div className="flex flex-col ser:flex-row flex-wrap w-full">
        <div className="mt-[60px] py-[10px] ">
          <Service_ul
            services={services}
            changed={changedLi}
            setChanged={setChangedLi}
          />
        </div>
        <div className=" w-2/5 mx-5 min-w-[300px] ser:ml-[128px] mt-[50px] ser:mt-0 ">
          <div className="flex">
            <CloudUl data={changedLi} />
          </div>
          <div className="">
            <PhotoUl data={changedLi} />
          </div>
          <div className=" mt-[55px]">
            <TextUl data={changedLi} />
          </div>
          <div className=" mt-[65px]">
            <Button type={"static"}> Оформить заявку</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
