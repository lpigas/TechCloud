import React from "react";

export default function Service_ul({ services, changed, setChanged }) {
  return (
    <ul className="">
      {services.map((item) => (
        <div
          key={item.name}
          className={`w-[478px] h-[67px] ${
            changed.name === item.name &&
            "bg-[#F0F0FA] rounded-tr-[20px] rounded-br-[20px] border-l-[4px] border-[#7166F9]"
          }`}
        >
          <li
            className="cursor-pointer font-normal not-italic text-[20px] leading-[46px] mx-5  text-[#616E87]"
            onClick={() => setChanged(item)}
          >
            {item.name}
          </li>
        </div>
      ))}
    </ul>
  );
}
