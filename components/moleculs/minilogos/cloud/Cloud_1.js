import React from "react";
import Roundblur100 from "../../../atoms/Rounds/Roundblur100";
import RoundBlur50 from "../../../atoms/Rounds/RoundBlur50";

export default function Cloud_1() {
  return (
    <Roundblur100 color={"violet"}>
      <RoundBlur50 color={"violet"}>
        <img src="/image/cloud_1.svg" width={31} height={31} alt="cloud 1" />
      </RoundBlur50>
    </Roundblur100>
  );
}
