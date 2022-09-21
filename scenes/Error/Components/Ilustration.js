import React from "react";
import Cloud_1 from "../../../components/moleculs/minilogos/cloud/Cloud_1";
import Cloud_Comp_1 from "../../../components/moleculs/minilogos/cloud/Cloud_Comp_1";
import Cloud_Serv_1 from "../../../components/moleculs/minilogos/cloud/Cloud_Serv_1";

export default function Ilustration() {
  return (
    <div className="max-w-[751px] max-h-[351px] flex justify-center items-center">
      <div className="font-bold not-italic text-[165px] leading-[70px] text-[#616E87]">
        404
        <div className="mt-24 lg:hidden flex justify-center text-[65px]"> Error</div>
      </div>
      <img src="/image/window/window.svg" className="absolute" />
      <div className="sm:hidden lg:flex max-w-full w-[751px] -[351px] absolute justify-start">
        <div className="absolute w-full h-full flex justify-end mt-[-150px] ml-[-25px]">
          <Cloud_1 />
        </div>
        <div className="absolute mt-[]">
          <Cloud_Serv_1 />
        </div>
        <div className="absolute mt-[100px] ml-[371px]">
          <Cloud_Comp_1 />
        </div>
      </div>
    </div>
  );
}
