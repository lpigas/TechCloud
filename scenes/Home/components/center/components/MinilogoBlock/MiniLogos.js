import React from "react";
import Cloud_certificate from "../../../../../../components/moleculs/minilogos/cloud/Cloud_certificate";
import Cloud_Friend from "../../../../../../components/moleculs/minilogos/cloud/Cloud_Friend";
import Cloud_Netw from "../../../../../../components/moleculs/minilogos/cloud/Cloud_Netw";

export default function MiniLogos() {
  return (
    <div className="flex">
      <div className=" top-0 left-0">
        <Cloud_Friend />
      </div>
      <div className=" top-0 left-[808px]">
        <Cloud_Netw />
      </div>
      <div className=" top-0 left-[404px]">
        <Cloud_certificate />
      </div>
    </div>
  );
}
