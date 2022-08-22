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
    <div className="w-[1286px]">
      <p className="flex font-bold not-italic text-[50px] leading-[55px] text-[#3E3F50] z-10">
        Наши услуги
        <div className="mt-[-10px] ml-[-10px]">
          <Roundblur52 color={"orange"} />
        </div>
      </p>
      <div className="flex ml-[35px]">
        <div className="w-[1286px] h-[822px]  flex">
          <Service_ul
            services={services}
            changed={changedLi}
            setChanged={setChangedLi}
          />
          <div className="flex flex-col w-[529px] ml-[128px] z-50">
            <div className=" relative">
              <CloudUl data={changedLi} />
            </div>
            <PhotoUl data={changedLi} />
            <TextUl data={changedLi} />
            <div className=" mt-[65px]">
              <Button type={"Static"}> Оформить заявку</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
