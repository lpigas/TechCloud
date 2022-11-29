import React, { useEffect } from "react";
import StandartInput from "../../../../../components/atoms/Input/StandartInput";
import Select from "react-select";
import Buttons from "../../../../../components/atoms/Buttons/Button";
import Loader from "../../../../../components/atoms/Loader/Loader";

export default function NewTicket({
  allTickets,
  newTicket,
  setNewTicket,
  onClick,
  message,
  isLoader,
}) {
  const groupe = [
    { value: "Проблемы с оплатой", label: "Проблемы с оплатой" },
    { value: "Проблемы с кабинетом", label: "Проблемы с кабинетом" },
  ];
  console.log(allTickets)
  const newTicketNum = allTickets ? allTickets.length : 0;
  const normaldata = new Date().toLocaleDateString();

  const makeNum = (newTicketNum) => {
    let num = String(+newTicketNum + 1);
    while (num.length < 7) {
      // выводит 0, затем 1, затем 2
      num = "0" + num;
    }
    return "#" + num;
  };
  useEffect(() => {
    setNewTicket({
      ...newTicket,
      numTicket: makeNum(newTicketNum),
      date: normaldata,
    });
  }, []);

  return (
    <div className="w-[579px] p-7 bg-white rounded-[15px]">
      <div>Номер Ticket: {newTicket.numTicket}</div>
      <div className="mt-[12px]">
        Дата Ticket: {new Date().toLocaleDateString()}
      </div>
      <Select
        id="react-select-2-live-region"
        onChange={(e) => setNewTicket({ ...newTicket, groupe: e.value })}
        className="mt-[12px] border-box w-full h-[px] bg-[#FFFFFF] rounded-[10px] border-[1px]"
        pageSize={10}
        placeholder={"Тема обращения"}
        options={groupe}
      />
      <textarea
        type={`text`}
        placeholder={"Enter your problem"}
        className={'w-full m-1 mt-4 p-4 border-2 rounded-[10px]'}
        onChange={(e) => setNewTicket({ ...newTicket, descr: e.target.value })}
      />
      {isLoader && (
        <div className="mt-[12px]">
          {" "}
          <Loader />{" "}
        </div>
      )}
      <div className="mt-[25px]">
        <Buttons type={"static"} onClick={onClick}>
          Сохранить
        </Buttons>
      </div>
      {message && <div className="text-red-500 mt-[12px]">{message}</div>}
    </div>
  );
}
