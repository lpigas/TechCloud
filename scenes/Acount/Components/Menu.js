import React from "react";

export default function Menu({ highlighted, setHighlighted, logout }) {
  const menu = [
    { img: "/image/Arrows/avatar.svg", menuname: "Персональная информация" },
    { img: "/image/Arrows/cart.svg", menuname: "История заказов" },
    { img: "/image/Arrows/messenger.svg", menuname: "Обращения (Тикеты)" },
  ];

  return (
    <div className="w-[644px] min-h-[277px]">
      {menu.map((item) => (
        <div
          key={Math.random()}
          onClick={() => setHighlighted(item.menuname)}
          className={`w-[644px] h-[62px] flex justify-end items-center mt-1 ${
            highlighted === item.menuname && "bg-[#E1E1F3]"
          }`}
        >
          <div className="flex items-center">
            <img width={18} height={18} src={item.img} />
            <div className="w-[198px] flex items-center ml-3 h-[56px] flex-wrap font-normal not-italic text-[16px] leading-[28px] text-[#3E3F50]">
              {item.menuname}{" "}
            </div>
          </div>
          <img
            width={7}
            height={14}
            className={"m-3"}
            src={"/image/Arrows/arrowright.svg"}
          />
        </div>
      ))}
      <div className="flex justify-end mt-[76px] items-center">
        <img src="/image/Arrows/logout.svg" />
        <div
          className="w-[198px] cursor-pointer ml-3 h-[56px] flex items-center font-normal not-italic text-[16px] leading-[28px] text-[#FD7A55]"
          onClick={logout}
        >
          Выйти
        </div>
      </div>
    </div>
  );
}
