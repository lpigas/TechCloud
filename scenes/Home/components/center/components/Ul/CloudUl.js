import React from "react";
import Roundblur100 from "../../../../../../components/atoms/Rounds/Roundblur100";
import RoundBlur50 from "../../../../../../components/atoms/Rounds/RoundBlur50";

export default function CloudUl({ data }) {
  return (
    <div className="ml-[-20px]">
      {data && (
        <Roundblur100 color={data.Roundblur.color}>
          <RoundBlur50 color={data.Roundblur.color}>
            <img src={data.Roundblur.img} />
          </RoundBlur50>
        </Roundblur100>
      )}
    </div>
  );
}
