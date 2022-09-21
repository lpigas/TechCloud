import React from "react";

export default function StandartInput({
  type,
  placeholder,
  value,
  styles,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={`border-box p-6 mt-[12px] w-full max-h-[45px]  bg-[#FFFFFF] pl-[12px] rounded-[10px] border-[1px] border-[#E4E4ED ${
        styles || ""
      }`}
      onChange={onChange}
    />
  );
}
