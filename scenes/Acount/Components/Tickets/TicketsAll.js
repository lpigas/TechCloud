import React, { useEffect, useState } from "react";
import TitleTickets from "../../../../components/atoms/Tables/TitleTickets";
import TicketsTable from "../../../../components/moleculs/Tables/TicketsTable";
import NewTicket from "./NewTicket";

export default function TicketsAll({
  allTickets,
  setOpenTicket,
  openTicket,
  email,
}) {
  const [openNewTicket, setOpenNewTicket] = useState();
  const [message, setMessage] = useState();
  const [isLoader, setIsLoader] = useState(false);
  const [newTicket, setNewTicket] = useState({
    numTicket: "",
    date: new Date().toLocaleDateString(),
    groupe: "",
    descr: "",
    correspondence: [],
    status: "new",
  });

  const addNewTicket = async () => {
    allTickets.unshift(newTicket);
    setIsLoader(true);
    if (newTicket.groupe.length < 1) {
      return setMessage("Нужно выбрать тему обращения");
    }
    try {
      const data = await fetch(`${process.env.API_HOST}addnewticket`, {
        method: "POST",
        body: JSON.stringify({ newTicket, allTickets, email }),
      });
      const datas = await data.json();
    } catch (error) {
      console.log(error);
    }
    setIsLoader(false);
    setNewTicket({
      numTicket: "",
      date: "",
      groupe: "",
      descr: "",
      correspondence: [],
      status: "new",
    });
    setOpenNewTicket();
  };
  useEffect(() => {
    message &&
      setTimeout(() => {
        setMessage();
      }, 4000);
  }, [message]);

  return (
    <div className="mt-[83px] w-full flex lg:px-[50px] break-all overflow-scroll">
      {!openNewTicket ? (
        <div className="w-full">
          <div className="flex justify-between px-1">
            <div className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50]">
              Мои обращения
            </div>
            <a
              className="font-bold not-italic text-[16px] leading-[28px] text-[#7166F9] cursor-pointer"
              onClick={() => setOpenNewTicket("open")}
            >
              Новый тикет
            </a>
          </div>
          {allTickets.length > 0 && (
            <div>
              <div className="mt-[56px] ">
                <TitleTickets />
              </div>
              <div className="py-1">
                {allTickets.map((ticket) => (
                  <TicketsTable
                    key={ticket.numTicket}
                    ticketinfo={ticket}
                    ticketOpen={openTicket}
                    setTicketOpen={setOpenTicket}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <NewTicket
            onClick={addNewTicket}
            allTickets={allTickets}
            isLoader={isLoader}
            newTicket={newTicket}
            setNewTicket={setNewTicket}
            message={message}
          />
        </div>
      )}
    </div>
  );
}
