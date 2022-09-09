import React from "react";

export default function TitleTickets() {
  return (
    <table className="w-[778px] h-[28px]">
      <thead className="w-full">
        <tr className="w-full">
          <td className="pl-[33px] w-1/5 font-normal not-italic text-[16px] leading-[28px] text-[#616E87]">
            Номер заявки
          </td>
          <td className="w-2/12 font-normal not-italic text-[16px] leading-[28px] text-[#616E87] ">
            Дата
          </td>
          <td className="w-3/12 font-normal not-italic text-[16px] leading-[28px] text-[#616E87]">
            Тема обращения
          </td>
          <td className="w-2/12 font-normal not-italic text-[16px] leading-[28px] text-[#616E87]">
            Описание
          </td>
          <td className="w-2/12 font-normal not-italic text-[16px] leading-[28px] text-[#616E87]">
            Статус
          </td>
        </tr>
      </thead>
    </table>
  );
}
