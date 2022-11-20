import React from "react";

export default function Menu({ highlighted, routingAcount }) {
  const menu = [
    {
      img: "/image/Arrows/avatar.svg",
      menuname: "Персональная информация",
      href: "personal",
    },
    {
      img: "/image/Arrows/cart.svg",
      menuname: "История заказов",
      href: "orders",
    },
    {
      img: "/image/Arrows/messenger.svg",
      menuname: "Обращения (Тикеты)",
      href: "tickets",
    },
  ];
  return (
    <div className="lg:mr-[-22px] flex flex-col w-full ">
      {menu.map((item) => (
        <div
          key={item.menuname}
          onClick={() => routingAcount(item.href)}
          className={`w-full flex justify-center lg:justify-end lg:py-[12px] mt-1 ${
            highlighted === item.href && "bg-[#E1E1F3]"
          }`}
        >
          <div className="flex flex-row items-center">
            <img
              width={18}
              height={18}
              src={item.img}
              className="hidden md:flex"
            />
            <div className=" flex items-center cursor-pointer ml-3 break-words flex-wrap font-normal not-italic text-[16px] leading-[28px] text-[#3E3F50]">
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
    </div>
  );
}