import React from "react";
import Cloud_1 from "../../../components/moleculs/minilogos/cloud/Cloud_1";
import Cloud_Comp_1 from "../../../components/moleculs/minilogos/cloud/Cloud_Comp_1";
import Cloud_Serv_1 from "../../../components/moleculs/minilogos/cloud/Cloud_Serv_1";

export default function Ilustration() {
  return (
    <div className=" min-h-40vh max-h-full flex justify-center items-center">
      <div className="font-bold not-italic text-[165px] leading-[70px] text-[#616E87]">
        404
      </div>
      <img src="/image/window/window.svg" className="absolute" />
      <div className="flex min-w-[751px] min-h-[351px] absolute justify-start">
        <div className="absolute mt-[187px]">
          <Cloud_Serv_1 />
        </div>
        <div className="absolute mt-[290px] ml-[371px]">
          <Cloud_Comp_1 />
        </div>
        <div className="absolute w-full h-full flex justify-end mt-[58px] ml-[-25px]">
          <Cloud_1 />
        </div>
      </div>
    </div>
  );
}
