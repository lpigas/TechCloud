import React from "react";
import Roundblur52 from "../../../components/atoms/Rounds/Roundblur52";

export default function TitleHome() {
  return (
    <div className="text-center font-bold not-italic text-[50px] ser:text-[65px] leading-[70px] text-[#3E3F50] relative">
      <span className=" absolute hidden ser:inline-block left-[45px] top-[-10px]">
        <Roundblur52 color={"blue"} />
      </span>
      Широкий спектр облачных услуг под ваши нужды
    </div>
  );
}