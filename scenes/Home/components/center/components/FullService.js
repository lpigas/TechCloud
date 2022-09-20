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
    <div className="max-w-full flex min-h-[822px] flex-col">
      <div className="flex font-bold not-italic text-[50px] leading-[55px] text-[#3E3F50] z-10">
        Наши услуги
        <div className="mt-[-10px] ml-[-10px]">
          <Roundblur52 color={"orange"} />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="mt-[60px]">
          <Service_ul
            services={services}
            changed={changedLi}
            setChanged={setChangedLi}
          />
        </div>
        <div className=" w-1/2 ml-[128px] min-h-75vh z-50">
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
