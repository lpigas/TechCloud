import React from "react";
import Roundblur52 from "../Rounds/Roundblur52";

export default function Beclient({ title, color }) {
  return (
    <div className="flex font-bold not-italic text-[50px] leading-[55px] text-[#3E3F50]">
      <Roundblur52 color={color} />
      <div className="mt-[15px] ml-[-15px]">{title}</div>
    </div>
  );
}
