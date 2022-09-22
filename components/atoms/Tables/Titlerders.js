import React from "react";

export default function Titlerders() {
  return (
    <table className="w-full">
      <thead className="w-full">
        <tr className="w-full break-all">
          <td className="lg:pl-[33px] w-1/5 font-normal not-italic text-[16px] leading-[28px] text-[#616E87]">
            Номер заказа
          </td>
          <td className="w-2/12 font-normal not-italic text-[16px] leading-[28px] text-[#616E87] ">
            Дата
          </td>
          <td className="w-3/12 font-normal not-italic text-[16px] leading-[28px] text-[#616E87]">
            Колличество товаров
          </td>
          <td className="w-2/12 font-normal not-italic text-[16px] leading-[28px] text-[#616E87]">
            Сумма
          </td>
          <td className="w-2/12 font-normal not-italic text-[16px] leading-[28px] text-[#616E87]">
            Статус
          </td>
        </tr>
      </thead>
    </table>
  );
}
