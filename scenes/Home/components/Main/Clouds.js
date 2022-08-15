import React from "react";
import Cloud_1 from "../../../../components/moleculs/minilogos/cloud/Cloud_1";
import Cloud_Comp_1 from "../../../../components/moleculs/minilogos/cloud/Cloud_Comp_1";
import Cloud_Serv_1 from "../../../../components/moleculs/minilogos/cloud/Cloud_Serv_1";

export default function Clouds() {
  return (
    <div>
      <div id={"home__cloud--1"} className="absolute left-[1295px] top-[528px]">
        <Cloud_1 />
      </div>
      <div
        id={"home__cloud--computing_1"}
        className="absolute left-[586px] top-[656px]"
      >
        <Cloud_Comp_1 />
      </div>
      <div
        id={"home__cloud--server_1"}
        className="absolute left-[846px] top-[917px]"
      >
        <Cloud_Serv_1 />
      </div>
    </div>
  );
}
