import React, { useEffect, useState } from "react";
import Roundblur52 from "../../../../components/atoms/Rounds/Roundblur52";
import CloudUl from "./Ul/CloudUl";
import Service_ul from "./Ul/Service_ul";
import PhotoUl from "./Ul/PhotoUl";
import TextUl from "./Ul/TextUl";
import dataul from "../../../../constants/About/dataul.json";
import Button from "../../../../components/atoms/Buttons/Button/Button";

export default function FullService() {
  const services = dataul.services;
  const [changedLi, setChangedLi] = useState("");

  return (
    <div className="w-[1286px] flex min-h-[822px] flex-col">
      <p className="flex font-bold not-italic text-[50px] leading-[55px] text-[#3E3F50] z-10">
        Наши услуги
        <div className="mt-[-10px] ml-[-10px]">
          <Roundblur52 color={"orange"} />
        </div>
      </p>

      <div className="flex flex-row">
        <div className="w-[377px] h-[516px] mt-[60px]">
          <Service_ul
            services={services}
            changed={changedLi}
            setChanged={setChangedLi}
          />
        </div>
        <div className=" w-[579px] ml-[128px] h-[516px] z-50">
          <div className=" relative">
            <CloudUl data={changedLi} />
          </div>
          <div className="h-[355px]">
            <PhotoUl data={changedLi} />
          </div>
          <div className="h-[106px] mt-[55px]">
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
