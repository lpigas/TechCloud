import { useRouter } from "next/router";
import React, { useState } from "react";
import Menu from "./Components/Menu";
const bcrypt = require("bcryptjs");

export default function Side({ user, highlighted, setHighlighted }) {
  const router = useRouter();

  const balance =
    user && Buffer.from(`${user.balance}`, "base64").toString("ascii");
  const logout = () => {
    if (typeof window !== "undefined") {
      const data = window.localStorage.removeItem("token");
      router.push("/");
    }
  };

  return (
    <div className="w-[644px] min-h-[591px] flex flex-col items-end ">
      <div className="mt-[60px] w-[210px] mr-[22px] font-normal not-italic text-[12px] leading-[28px] text-[#3E3F50] z-10">
        Добро пожаловать
      </div>
      <div className="w-[210px] min-h-[56px] break-words mr-[22px] font-bold not-italic text-[24px] leading-[28px] text-[#3E3F50] z-10">
        {user.name} {user.sername}
      </div>
      <div className="w-[224px] mt-[3px] mr-[22px] min-h-[107px] flex flex-row bg-[#ffffff] rounded-[15px] ">
        <div className=" flex w-1/2 items-center flex-col">
          <p className="font-normal not-italic text-[16px] mt-[15px] leading-[28px] text-[#3E3F50]">
            Баланс
          </p>
          <p className="font-bold not-italic text-[42px] mt-[15px] leading-[28px] text-[#3E3F50] z-10">
            balance
          </p>
        </div>
        <div className=" flex w-1/2 items-center flex-col">
          <a className="font-bold mt-[15px] cursor-pointer not-italic text-[16px] leading-[28px] text-[#7166F9]">
            Пополнить
          </a>
          <img src="/image/Arrows/Vector.svg" className="mt-[25px] ml-8"></img>
        </div>
      </div>
      <div className="mt-[43px]">
        <Menu
          highlighted={highlighted}
          setHighlighted={setHighlighted}
          logout={logout}
        />
      </div>
    </div>
  );
}
