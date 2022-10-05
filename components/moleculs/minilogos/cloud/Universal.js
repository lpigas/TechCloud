import React from "react";
import Roundblur100 from "../../../atoms/Rounds/Roundblur100";
import RoundBlur50 from "../../../atoms/Rounds/RoundBlur50";

export default function Universal({ children, color }) {
  return (
    <Roundblur100 color={color}>
      <RoundBlur50 color={color}>{children}</RoundBlur50>
    </Roundblur100>
  );
}
