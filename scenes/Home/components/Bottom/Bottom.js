import React from "react";
import Roundblur52 from "../../../../components/atoms/Rounds/Roundblur52";
import Button from "../../../../components/atoms/Buttons/Button/Button";

export default function Bottom() {
  return (
    <div className="w-[1185px] h-[515px] absolute top-[2125px] left-[368px] bg-[#F0F0FA] rounded-[80px]">
      <div className="absolute top-[139px] left-[399px] font-bold not-italic text-[50px] leading-[55px] text-[#3E3F50]">
        Стать клиентом
      </div>
      <div className="absolute left-[364px] top-[115px]">
        <Roundblur52 color={"violet"} />
      </div>
      <div className="w-[638px] h-[56px] absolute top-[217px] left-[273px] flex-wrap flex text-center font-normal not-italic text-[18px] leading-[28px] text-[#616E87]">
        Оставьте заявку, мы проконсультируем вас и поможем подобрать оптимальную
        услугу или продукт
      </div>
      <div className="absolute top-[330px] left-[454px]">
        <Button type={"Static"}>Стать клиентом</Button>
      </div>
    </div>
  );
}
