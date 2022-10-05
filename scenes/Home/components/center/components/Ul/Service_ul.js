import React from "react";

export default function Service_ul({ services, changed, setChanged }) {
  return (
    <ul className="w-full ">
      {services.map(
        (item) =>
          item.title && (
            <div
              key={item.title.name}
              className={`w-full xl:min-w-[478px] py-[16px] ${
                changed.title.name === item.title.name &&
                "bg-[#F0F0FA] rounded-tr-[20px] rounded-br-[20px] border-l-[4px] ml-[-4px] border-[#7166F9]"
              }`}
            >
              <li
                className="cursor-pointer break-words font-normal w-full not-italic text-[20px] leading-[46px] text-[#616E87]"
                onClick={() => setChanged(item)}
              >
                {item.title.name}
              </li>
            </div>
          )
      )}
    </ul>
  );
}
