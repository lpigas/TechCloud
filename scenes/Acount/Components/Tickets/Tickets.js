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
    <div className="bg-[#F9F9FC] max-h-[800px]  lg:max-h-[1200px] w-full lg:w-2/3   overflow-scroll">
      {!allTickets ? (
        <div className="flex justify-center items-center mt-52">
        <Loader />
        </div>
      ) : (
        <div className="mt-[83px] w-full ">
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
