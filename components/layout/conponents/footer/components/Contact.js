import React from "react";
import Button from "../../../../atoms/Buttons/Button/Button";

export default function Contact() {
  return (
    <div>
      <div className="font-medium not-italic text-[24px] leading-[28px] w-[276px] h-[28px] text-[#3E3F50]">
        Контакты
      </div>
      <div className="absolute top-[50px] font-normal not-italic text-[18px] leading-[36px] w-[276px] h-[71px] text-[#616E87]">
        <p>Звоните нам:</p>
        <p className="text-[22px] text-[#3E3F50] font-bold">
          +38(048)788 78 33
        </p>
      </div>
      <div className="absolute top-[147px] font-normal not-italic text-[18px] leading-[36px] w-[276px] h-[71px] text-[#616E87]">
        <p>или пишите:</p>
        <p className="text-[18px] text-[#3E3F50] font-normal">
          info@www.thecloudtech.click
        </p>
      </div>
      <div className="absolute top-[240px]">
        <Button type={"Static"}>
            Перезвоните мне
        </Button>
      </div>
    </div>
  );
}
