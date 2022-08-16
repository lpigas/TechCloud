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
    <div className="w-[1286px] h-[822px] absolute top-[794px] left-[367px] ">
      <p className="absolute top-[17px] left-0 font-bold not-italic text-[50px] leading-[55px] text-[#3E3F50] z-10">
        Наши услуги
      </p>
      <div className="absolute top-[0] left-[303px]">
        <Roundblur52 color={"orange"} />
      </div>
      <div className="w-[377px] h-[516px] absolute top-[132px] left-[39px]">
        <Service_ul
          services={services}
          changed={changedLi}
          setChanged={setChangedLi}
        />
      </div>
      <div className="absolute top-[101px] left-[579px] z-50">
        <CloudUl data={changedLi} />
      </div>
      <div className="absolute w-[814px] h-[543px] top-[132px] left-[606px]">
        <PhotoUl data={changedLi} />
      </div>
      <div className="w-[680px] h-[134px] absolute top-[542px] left-[606px]">
        <TextUl data={changedLi} />
      </div>
      <div className="absolute top-[741px] left-[606px]">
        <Button type={"Static"}> Оформить заявку</Button>
      </div>
    </div>
  );
}
