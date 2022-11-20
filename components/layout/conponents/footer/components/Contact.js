import React from "react";
import Button from "../../../../atoms/Buttons/Button";

export default function Contact() {
  return (
    <div className="text-left">
      <div className="font-medium not-italic text-[24px] leading-[28px] min-w-[276px] minh-[28px] text-[#3E3F50]">
        Контакты
      </div>
      <div className=" mt-[22px] font-normal not-italic text-[18px] leading-[36px] min-w-[276px] min-h-[71px] text-[#616E87]">
        <p>Звоните нам:</p>
        <p className="text-[22px] text-[#3E3F50] font-bold">
          +38(048)788 78 33
        </p>
      </div>
      <div className="mt-[26px] font-normal not-italic text-[18px] leading-[36px] min-w-[276px] min-h-[71px] text-[#616E87]">
        <p>или пишите:</p>
        <p className="text-[18px] text-[#3E3F50] font-normal">
          info@www.thecloudtech.click
        </p>
      </div>
      <div className="mt-[22px]">
        <Button type={"static"}>Перезвоните мне</Button>
      </div>
    </div>
  );
}
