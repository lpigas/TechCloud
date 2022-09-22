import React from "react";

export default function TicketsTable({ ticketinfo, setTicketOpen }) {
  // console.log(ticketinfo.numTicket)
  return (
    <table className="w-full bg-[#FFFFFF] mt-[12px] mb-[21px] rounded-[10px] lg:rounded-[30px]"
    onClick={() => setTicketOpen(ticketinfo)}>
      <tbody className="w-full">
        <tr className="w-full py-8 flex">
          <td className="lg:pl-[33px] w-1/5 font-bold not-italic text-[16px] leading-[28px] text-[#3E3F50]">
            {ticketinfo.numTicket}
          </td>
          <td className="w-2/12 font-normal not-italic text-[16px] leading-[28px] text-[#3E3F50] ">
            {ticketinfo.date}
          </td>
          <td className="w-3/12 font-normal not-italic text-[16px] leading-[28px] text-[#3E3F50]">
            {ticketinfo.groupe}
          </td>
          <td className="w-2/12 font-normal not-italic text-[16px] leading-[28px] text-[#3E3F50]">
            {ticketinfo.descr}
          </td>
          <td className="w-2/12 ">
            {ticketinfo.status === "ok" ? (
              <a
                className={`flex justify-between not-italic text-[16px] leading-[28px] text-[#3DCAA8]`}
              >
                Закрыт
                <img
                  className="mr-[10px]"
                  src="/image/Arrows/arrowdown.svg"
                  width={16}
                  height={28}
                  
                />
              </a>
            ) : ticketinfo.status === "wait" ? (
              <a
                className={`flex justify-between not-italic text-[16px] leading-[28px] text-[#FD5555]`}
              >
                Решается
                <img
                  className="mr-[10px]"
                  src="/image/Arrows/arrowdown.svg"
                  width={16}
                  height={28}
                  
                />
              </a>
            ) : (
              <a
                className={`flex justify-between not-italic text-[16px] leading-[28px] text-[#616E87]`}
              >
                Новый
                <img
                  className="mr-[10px]"
                  src="/image/Arrows/arrowdown.svg"
                  width={16}
                  height={28}
                  
                />
              </a>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
