import React from "react";
const sizes = {
  lg: "w-[175px] h-[58px] drop-shadow-[0_8px_15px_rgba(199,199,225,0.4)] text-[#616E87] leading-[28px]",
  xl: "w-[217px] h-[58px] drop-shadow-[0_8px_15px_rgba(199,199,225,0.4)] text-[#616E87] leading-[28px]",
};

export default function VectorForms({ children, size }) {
  return (
    <div
      className={`${sizes[size]} rounded-[20px] bg-[#FFFFFF] border-3 flex justify-center items-center font-normal text-[14px] z-25`}
    >
      {children}
    </div>
  );
}
