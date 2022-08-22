import React from "react";

export default function FaqBlock({ data, opened, setOpened }) {
  console.log(data);
  return (
    <div
      className={`w-[882px] mb-[13px] p-0 ${
        opened !== data.title ? "min-h-[85px]" : "min-h-[281px]"
      } rounded-[10px] bg-[#F9F9FC] border-[10px] border-[#F9F9FC] flex justify-between`}
    >
      <p className="ml-[39px] mt-[20px] font-normal not-italic text-[20px] leading-[24px] text-[#3E3F50]">
        {data.title}
        {opened === data.title && (
          <ul className="ml-[43px] mt-[15px]">
            {data.description.map((item) => (
              <li
                key={Math.random()}
                className="font-normal not-italic text-[18px] leading-[34px] text-[#616E87]"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </p>
      {opened !== data.title ? (
        <div className="h-1/2 w-6 " onClick={() => setOpened(data.title)}>
          <img src="/image/Arrows/chevron.svg" className="m-auto" />
        </div>
      ) : (
        <div className="h-1/2 w-6" onClick={() => setOpened("")}>
          <img src="/image/Arrows/cancel.svg" className="m-auto" />
        </div>
      )}
    </div>
  );
}
