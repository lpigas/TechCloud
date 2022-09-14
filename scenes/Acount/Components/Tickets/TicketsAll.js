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
    date: "",
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
        body: JSON.stringify({ allTickets, email }),
      });
      const datas = await data.json();
      const token = datas.token;
      if (typeof window !== "undefined" && token) {
        const data = window.localStorage.setItem(
          "token",
          JSON.stringify(token)
        );
      }
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
    <div className="w-[778px] h-[871px] overflow-scroll ">
      {!openNewTicket ? (
        <div>
          <div className="flex justify-between">
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
