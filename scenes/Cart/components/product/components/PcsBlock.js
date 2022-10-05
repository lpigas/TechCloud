import React, { useEffect } from "react";
import { useState } from "react";

export default function PcsBlock({ data, index, changeData, focus }) {
  return (
    <div className="flex justify-center ser:w-3/4 m-auto border-[2px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <button
        disabled={data === 0}
        className="text-[#FD7A55] hidden ser:flex justify-center items-center bg-white w-1/3 cursor-pointer"
        onClick={() => changeData(index, data - 1)}
      >
        -
      </button>
      <input
        type={"phone"}
        autoFocus={focus === index}
        onChange={(e) => changeData(index, +e.target.value)}
        value={data}
        className="max-w-full ser:w-1/3 text-center text-[#616E87] text-[16px] leading-[28px]"
      ></input>
      <button
        className="text-[#FD7A55] hidden ser:flex justify-center items-center bg-white w-1/3 cursor-pointer"
        onClick={() => changeData(index, data + 1)}
      >
        +
      </button>
    </div>
  );
}
