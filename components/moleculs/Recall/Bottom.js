import React from "react";
import Roundblur52 from "../../atoms/Rounds/Roundblur52";
import Button from "../../atoms/Buttons/Button/Button";
import Beclient from "../../atoms/Text/Beclient";

export default function Bottom({ title, buttonName }) {
  return (
    <div className="w-[1185px] h-[515px] mx-auto bg-[#F0F0FA] rounded-[80px] flex items-center flex-col">
      <Beclient title={title} color={"violet"} />
      <div className="absolute left-[364px] top-[115px]"></div>
      <div className="w-[638px] h-[56px] mt-[23px] flex-wrap flex text-center font-normal not-italic text-[18px] leading-[28px] text-[#616E87]">
        Оставьте заявку, мы проконсультируем вас и поможем подобрать оптимальную
        услугу или продукт
      </div>
      <div className="mt-[36px]">
        <Button type={"static"}>{buttonName}</Button>
      </div>
    </div>
  );
}
