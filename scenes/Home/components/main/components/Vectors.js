import React from "react";
import Vector_bis from "../../../../../components/moleculs/minilogos/Vectors/Vector_business";
import Vector_consalt from "../../../../../components/moleculs/minilogos/Vectors/Vector_consalt";
import Vector_outsorc from "../../../../../components/moleculs/minilogos/Vectors/Vector_outsorc";
import Vector_secur from "../../../../../components/moleculs/minilogos/Vectors/Vector_secur";
import Cloud_1 from "../../../../../components/moleculs/minilogos/cloud/Cloud_1";
import Cloud_Comp_1 from "../../../../../components/moleculs/minilogos/cloud/Cloud_Comp_1";
import Cloud_Serv_1 from "../../../../../components/moleculs/minilogos/cloud/Cloud_Serv_1";
import Certificates from "../../../../../components/atoms/Certificates/Certificates";

export default function Vectors() {
  return (
    <div className="max-w-90vw m-auto bg-[url('/image/window/window.svg')] bg-contain bg-no-repeat bg-center">
      <div className="mt-[45px]">
        <div id="home__vector--business" className="flex justify-between ">
          <div className="" />
          <div className="flex ">
            <Vector_bis />
            <div className="ml-[-50px] mt-[35px]">
              <Cloud_Comp_1 />
            </div>
          </div>
          <div className="mt-[38px]">
            <Vector_consalt />
          </div>
          <div className="mt-[-16px] flex">
            <Vector_outsorc />
            <div className="mt-[-60px] ml-[-20px]">
              <Cloud_1 />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Certificates />
        </div>
        <div id="home__vector--security" className="mt-[46px] ml-[76px] flex">
          <Vector_secur />
          <div className="ml-[176px] mt-[25px]">
            <Cloud_Serv_1 />
          </div>
        </div>
      </div>
    </div>
  );
}
