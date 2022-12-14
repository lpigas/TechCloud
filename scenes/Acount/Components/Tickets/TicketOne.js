import React, { useEffect, useState } from "react";
import Loader from "../../../../components/atoms/Loader/Loader";
import Add from "./Add";

export default function TicketOne({ ticketInfo, email, role }) {
  let dateNow = "";
  const [uploadData, setUploadData] = useState({
    img: "",
    text: "",
    date: "",
    time: "",
    role: "",
  });
  const [messages, setMessages] = useState();
  const [openLoader, setOpenLOader] = useState(false);

  // console.log(ticketInfo)
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
      const token = datas.token;
      setMessages(datas.message);
      if (typeof window !== "undefined") {
        const data = window.localStorage.setItem(
          "token",
          JSON.stringify(token)
        );
      }
    } catch (error) {
      console.log(error);
    }
    setOpenLOader(false);
  };

  const loadNewMessage = () => {
    const data = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString().slice(0, -3);
    const normaldata =
      data.slice(0, data.length - 4) + data.slice(data.length - 2, data.length);
    ticketInfo.correspondence.push({
      ...uploadData,
      time: time,
      data: normaldata,
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
    <>
      <div className="w-[813px] h-[490px] overflow-scroll">
        <div className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50]">
          Тикет: {ticketInfo.numTicket}
        </div>

        <div className="mt-[13px] flex justify-between font-bold not-italic text-[16px] leading-[28px] text-[#3E3F50] ">
          {ticketInfo.descr}
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
              Новый
            </a>
          )}
        </div>
        <div className="w-[776px] mt-[17px] overflow-y-scroll items-center justify-end min-h-fit pb-12 bg-[#FFFFFF] rounded-[30px]">
          {ticketInfo.correspondence.map((item, index) => (
            <div key={Math.random()}>
              <div
                className={`text-center ${
                  index === 0 && "mt-[37px]"
                } font-normal not-italic text-[14px] leading-[18px] text-[#C8C8DB]`}
              >
                {dateNow !== item.date && <div>{(dateNow = item.date)}</div>}
              </div>
              <div
                className={`ml-[52px] w-[547px] mt-[34px] flex flex-col ${
                  item.role === "admin" && "items-end ml-52"
                } `}
              >
                <div className="font-normal not-italic text-[12px] leading-[16px] text-[#616E87]">
                  {item.role !== "admin" && <div>{item.role + ":"}</div>}
                </div>
                <div
                  className={` w-fit py-[12px] px-[16px] mt-[4px] ${
                    item.role !== "admin"
                      ? "bg-[#ffb39d] justify-start text-start "
                      : "bg-[#F0F0FA] break-word "
                  } rounded-[8px] `}
                >
                  <div className=" break-word text-start font-normal not-italic text-[16px] leading-[20px] text-[#3E3F50]">
                    {item.text && item.text}
                    {item.img && <img src={item.img} width={25} height={25} />}
                  </div>
                </div>
                <div className="mt-[8px] font-normal not-italic te text-[12px] leading-[16px] text-[#C8C8DB]">
                  {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[37px]">
        <Add
          uploadData={uploadData}
          setUploadData={setUploadData}
          loadNewMessage={loadNewMessage}
          openLoader={openLoader}
        />
      </div>
    </>
  );
}
