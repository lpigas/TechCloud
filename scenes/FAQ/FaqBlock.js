import React from "react";

export default function FaqBlock({ FAQdata, opened, setOpened }) {

  return (
    <div
      onClick={() => (opened === FAQdata.title  ? setOpened("") : setOpened(FAQdata.title))}
      className={`sm:w-full lg:w-1/2 mb-[13px] ${
        opened !== FAQdata.title
          ? "min-h-[85px] bg-[#F9F9FC] border-[#F9F9FC]"
          : "min-h-[281px] bg-white border-white"
      } rounded-[10px] border-[10px]`}
    >
      <div className=" w-full px-8 mt-[20px] font-normal not-italic text-[20px] leading-[24px] text-[#3E3F50]">
        <div className=" flex items-center justify-between">
          {FAQdata.title}
          {opened !== FAQdata.title ? (
            <div
              className="h-1/2 w-6 flex items-center"
              onClick={() => setOpened(FAQdata.title)}
            >
              <img src="/image/Arrows/chevron.svg" className="m-auto" />
            </div>
          ) : (
            <div className="h-1/2 w-6" onClick={() => setOpened("")}>
              <img src="/image/Arrows/cancel.svg" className="m-auto" />
            </div>
          )}
        </div>
        {opened === FAQdata.title && (
          <div className="ml-[43px] mt-[15px] ">
            {FAQdata.description.map((item) => (
              <div
                key={item}
                className="font-normal not-italic text-[18px] leading-[34px] text-[#616E87]"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
