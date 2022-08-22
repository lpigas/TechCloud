import React from "react";

export default function TextUl({ data }) {
  return (
    <div>
      {data && (
        <div className="wrap">
          <h1 className="font-medium not-italic text-[24px] leading-[28px] text-[#3E3F50] z-10">
            {data.text.title}
          </h1>
          <p className="mt-[22px] font-normal not-italic text-[18px] leading-[28px] text-[#616E87] z-10">
            {data.text.description}
          </p>
        </div>
      )}
    </div>
  );
}
