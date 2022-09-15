import React, { useState } from "react";
import TicketOne from "./TicketOne";
import TicketsAll from "./TicketsAll";

export default function Tickets({ allTickets, email, role }) {
  const [openTicket, setOpenTicket] = useState();
  // console.log(openTicket);
  return (
    <div className="bg-[#F9F9FC] w-full">
      <div className="mt-[83px] ml-[128px] w-[781px] h-[788px]">
        {openTicket ? (
          <TicketOne ticketInfo={openTicket} email={email} role={role} />
        ) : (
          <TicketsAll
            email={email}
            allTickets={allTickets}
            setOpenTicket={setOpenTicket}
            openTicket={openTicket}
          />
        )}
      </div>
    </div>
  );
}