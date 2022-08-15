import React from "react";
import Vector_bis from "../../../../components/moleculs/minilogos/Vectors/Vector_business";
import Vector_consalt from "../../../../components/moleculs/minilogos/Vectors/Vector_consalt";
import Vector_outsorc from "../../../../components/moleculs/minilogos/Vectors/Vector_outsorc";
import Vector_secur from "../../../../components/moleculs/minilogos/Vectors/Vector_secur";

export default function Vectors() {
  return (
    <div>
      <div
        id="home__vector--business"
        className="absolute left-[419px] top-[614px]"
      >
        <Vector_bis />
      </div>
      <div
        id="home__vector--consulting"
        className="absolute left-[495px] top-[856px]"
      >
        <Vector_consalt />
      </div>
      <div
        id="home__vector--Outsourcing"
        className="absolute left-[811px] top-[652px]"
      >
        <Vector_outsorc />
      </div>
      <div
        id="home__vector--security"
        className="absolute left-[1162px] top-[598px]"
      >
        <Vector_secur />
      </div>
    </div>
  );
}
