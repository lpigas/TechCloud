import React from "react";

export default function TicketsTable({ ticketinfo, index, setTicketOpen }) {
  // console.log(ticketinfo.numTicket)
  return (
    <table className="w-[778px] bg-[#FFFFFF] mt-[12px] mb-[21px] rounded-[30px] min-h-[118px]">
      <tbody className="w-full p-10">
        <tr className="w-full h-[118px]">
          <td className="pl-[33px] w-1/5 font-bold not-italic text-[16px] leading-[28px] text-[#3E3F50]">
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
                  onClick={() =>
                    setTicketOpen({ ticket: ticketinfo, index: index })
                  }
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
                  onClick={() => setTicketOpen(ticketinfo)}
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
                  onClick={() => setTicketOpen(ticketinfo)}
                />
              </a>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
