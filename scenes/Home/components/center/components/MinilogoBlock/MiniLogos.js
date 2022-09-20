import React from "react";
import Cloud_certificate from "../../../../../../components/moleculs/minilogos/cloud/Cloud_certificate";
import Cloud_Friend from "../../../../../../components/moleculs/minilogos/cloud/Cloud_Friend";
import Cloud_Netw from "../../../../../../components/moleculs/minilogos/cloud/Cloud_Netw";

export default function MiniLogos() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="">
        <Cloud_Friend />
      </div>
      <div className="">
        <Cloud_Netw />
      </div>
      <div className="">
        <Cloud_certificate />
      </div>
    </div>
  );
}
