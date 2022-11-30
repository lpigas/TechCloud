import React, { useState } from "react";
import Add from "./Add";
import Button from "components/atoms/Buttons/Button";

export default function TicketOne({ ticketInfo, email, role,setOpenTicket }) {
  const dates = {};

  ticketInfo.correspondence.forEach((item) => {
    if (dates[item.date]) {
      dates[item.date] = [...dates[item.date], item];
    } else {
      dates[item.date] = [item];
    }
  });
  console.log(ticketInfo.status)

  const [uploadData, setUploadData] = useState({
    img: "",
    text: "",
    date: "",
    time: "",
    role: "",
  });
  const [openLoader, setOpenLOader] = useState(false);

  const addNewMessage = async () => {
    setOpenLOader(true);
    try {
      const data = await fetch(`${process.env.API_HOST}addmessage`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          numticket: ticketInfo.numTicket,
          newCorespodense: { ...uploadData, role: role },
        }),
      });
      const datas = await data.json();
    } catch (error) {
      console.log(error);
    }
    setOpenLOader(false);
  };

  const loadNewMessage = () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString().slice(0, -3);
    const normaldate =
      date.slice(0, date.length - 4) + date.slice(date.length - 2, date.length);
    ticketInfo.correspondence.push({
      ...uploadData,
      time: time,
      date: normaldate,
      role: role,
    });
    addNewMessage();
    setUploadData({
      img: "",
      text: "",
      date: "",
      time: "",
      role: "",
    });
  };

  return (
    <div className="pb-8 ">
      <div className="w-full  lg:px-[50px] overflow-scroll">
        <div className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50] flex justify-between">
          Тикет: {ticketInfo.numTicket}
          {ticketInfo.status === "ok" ? (
            <a
              className={` not-italic text-[16px] leading-[28px] text-[#3DCAA8] `}
            >
              Закрыт
            </a>
          ) : ticketInfo.status === "wait" ? (
            <a
              className={`not-italic text-[16px] leading-[28px] text-[#FD5555]`}
            >
              Решается
            </a>
          ) : (
            <a
              className={` not-italic text-[16px] leading-[28px] text-[#616E87]`}
            >
              {console.log(ticketInfo.status)}
              Новый
            </a>
          )}
        </div>

        <div className="mt-[13px] px-2  font-bold not-italic text-[16px] leading-[28px] text-[#3E3F50] break-all">
          {ticketInfo.descr}
         
        </div>
        {ticketInfo.correspondence.length === 0 ? 
          <div className="text-red-600 flex justify-center my-8"> No correspondence yet</div>
          :
        <div className="w-full mt-[17px] overflow-y-scroll px-2 items-center justify-end min-h-fit pb-8 bg-[#FFFFFF] rounded-[10px] lg:rounded-[30px]">
          {Object.keys(dates).map((item) => (
            <div key={item}>
              <div className="text-center mt-1">{item}</div>
              {dates[item].map((message) => (
                <div key={message.text + message.time}>
                  <div
                    className={`lg:px-4 w-full mt-[34px] flex flex-col ${
                      message.role === "admin" && "items-end "
                    } `}
                  >
                    <div className="font-normal not-italic text-[12px] leading-[16px] text-[#616E87]">
                      {message.role !== "admin" && (
                        <div>{message.role + ":"}</div>
                      )}
                    </div>
                    <div
                      className={` w-fit py-[12px] lg:px-[16px] mt-[4px] ${
                        message.role !== "admin"
                          ? "bg-[#ffb39d] justify-start text-start "
                          : "bg-[#F0F0FA] break-word "
                      } rounded-[8px] `}
                    >
                      <div className=" break-word text-start font-normal not-italic text-[16px] leading-[20px] text-[#3E3F50]">
                        {message.text && message.text}
                        {message.img && (
                          <img src={message.img} width={25} height={25} />
                        )}
                      </div>
                    </div>
                    <div className="mt-[8px] font-normal not-italic te text-[12px] leading-[16px] text-[#C8C8DB]">
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        }
      </div>
      <div className="mt-[37px] lg:px-12 ">
        <Add
          uploadData={uploadData}
          setUploadData={setUploadData}
          loadNewMessage={loadNewMessage}
          openLoader={openLoader}
        />
      <div className="flex m-2 ser:m-14 justify-end">
      <Button onClick={()=>setOpenTicket()} type={"static"}>
          {" "}
        Вернуться назад
        </Button>
      </div>
      </div>
    </div>
  );
}
