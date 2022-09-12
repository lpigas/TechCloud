import React, { useEffect, useState } from "react";
import TitleTickets from "../../../../components/atoms/Tables/TitleTickets";
import TicketsTable from "../../../../components/moleculs/Tables/TicketsTable";

export default function TicketsAll({ allTickets, setOpenTicket, openTicket }) {
  // console.log(openTicket)
  return (
    <div className="w-[778px] h-[871px] overflow-scroll ">
      <div className="flex justify-between">
        <div className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50]">
          Мои обращения
        </div>
        <a className="font-bold not-italic text-[16px] leading-[28px] text-[#7166F9]">
          Новый тикет
        </a>
      </div>
      <div className="mt-[56px]">
        <TitleTickets />
      </div>
      <div>
        {allTickets.map((ticket) => (
          <TicketsTable
            key={Math.random()}
            ticketinfo={ticket}
            ticketOpen={openTicket}
            setTicketOpen={setOpenTicket}
          />
        ))}
      </div>
    </div>
  );
}
