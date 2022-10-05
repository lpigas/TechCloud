import React from "react";
import Roundblur74 from "../../atoms/Rounds/RoundBlur74";

export default function ServicesDescr({ description, num }) {
  // console.log(num)
  // console.log(description)
  return (
    <>
      <div className="flex flex-row ">
        <div>
          <Roundblur74 color={"blue"}> {num + 1} </Roundblur74>
        </div>
        <p className="flex ml-[27px] font-normal not-italic text-[20px] leading-[34px] text-[#616E87]">
          {description}
        </p>
      </div>
      <br />
    </>
  );
}
