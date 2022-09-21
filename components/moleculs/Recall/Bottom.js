import React from "react";
import Button from "../../atoms/Buttons/Button/Button";
import Beclient from "../../atoms/Text/Beclient";

export default function Bottom({ title, buttonName }) {
  return (
    <div className="p-24  mx-auto bg-[#F0F0FA] lg:max-w-1/2 max-w-90% rounded-[20px] lg:rounded-[80px] flex items-center flex-col ">
      <Beclient title={title} color={"violet"} />
      <div className="mt-[23px] flex-wrap flex text-center font-normal not-italic text-[18px] leading-[28px] text-[#616E87]">
        Оставьте заявку, мы проконсультируем вас и поможем подобрать оптимальную
        услугу или продукт 
      </div>
      <div className="mt-[36px]">
        <Button type={"static"}>{buttonName}</Button>
      </div>
    </div>
  );
}
