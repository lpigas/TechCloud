import React, { useEffect, useState } from "react";
import Loader from "../../../../components/atoms/Loader/Loader";
import TicketOne from "./TicketOne";
import TicketsAll from "./TicketsAll";

export default function Tickets({ email, role }) {
  const [allTickets, setAllTickets] = useState();
  const [openTicket, setOpenTicket] = useState();

  const getTicket = async () => {
    try {
      const data = await fetch(`${process.env.API_HOST}orders`, {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const datas = await data.json();
      setAllTickets(datas.tickets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTicket();
  }, []);

  return (
    <div className="bg-[#F9F9FC] w-full">
      {!allTickets ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
}
