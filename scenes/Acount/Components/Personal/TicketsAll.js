import React, { useEffect, useState } from "react";
import TitleTickets from "../../../../components/atoms/Tables/TitleTickets";
import TicketsTable from "../../../../components/moleculs/Tables/TicketsTable";
import NewTicket from "./NewTicket";

export default function TicketsAll({ allTickets, setOpenTicket, openTicket }) {
  const [openNewTicket,  setOpenNewTicket] = useState()
  const [newTicket, setNewTicket] =useState ({
    numTicket:"",
    date:"",
    groupe:"",
    descr:"",
    correspondence:[],
    status:"new"})
  // console.log(allTickets)
  // console.log(newTicket)
  return (
    <div className="w-[778px] h-[871px] overflow-scroll ">
     
      {!openNewTicket
      ?
      <div>
      <div className="flex justify-between">
        <div className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50]">
          Мои обращения
        </div>
        <a className="font-bold not-italic text-[16px] leading-[28px] text-[#7166F9] cursor-pointer" onClick={()=> setOpenNewTicket('open')}>
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
      : <div>
        <NewTicket allTickets={allTickets} newTicket={newTicket} setNewTicket={setNewTicket}/>
        </div>
      }
    </div>
  );
}
