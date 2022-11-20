import { useRouter } from "next/router";
import React from "react";
import Menu from "./components/Menu";

export default function Side({ user, highlighted }) {
  const router = useRouter();
  const routingAcount = (href) => {
    router.push(process.env.USER_PATH + `?user=${user.name}&page=${href}`);
  };

  const balance =
    user && Buffer.from(`${user.balance}`, "base64").toString("ascii");

  const addCartdb = async () => {
    let cart;
    if (typeof window !== "undefined") {
      cart = JSON.parse(window.localStorage.getItem("Cart"));
    }
    if (cart) {
      try {
        const data = await fetch(`${process.env.API_HOST}addcartdb`, {
          method: "POST",
          body: JSON.stringify({ email: user.email, cart }),
        });
      } catch (error) {}
    }
  };

  const logout = () => {
    addCartdb();
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("Cart");
      window.localStorage.removeItem("user");
      router.push("/api/auth/logout");
    }
  };

  return (
    <div className="w-full lg:w-1/3  lg:pr-[22px] flex flex-col items-end mb-4">
      <div className="mt-[60px] flex flex-col w-full items-center lg:items-end  font-normal not-italic text-[12px] leading-[28px] text-[#3E3F50] z-10">
        <div>
          Добро пожаловать
          <div className="break-words  font-bold not-italic text-[24px] leading-[28px] text-[#3E3F50] z-10">
            {user.name} {user.surname}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 my-[35px] flex flex-row bg-[#ffffff] rounded-[15px] ">
        <div className=" flex w-1/2 p-[22px] items-center flex-col">
          <p className="font-normal not-italic text-[16px] mt-[5px] leading-[28px] text-[#3E3F50]">
            Баланс
          </p>
          <p className="font-bold not-italic text-[42px] mt-[15px] leading-[28px] text-[#3E3F50] z-10">
            {balance}
          </p>
        </div>
        <div className=" flex w-1/2 p-[22px] items-center flex-col">
          <a className="font-bold mt-[5px] cursor-pointer not-italic text-[16px] leading-[28px] text-[#7166F9]">
            Пополнить
          </a>
          <img src="/image/Arrows/Vector.svg" className="mt-[25px] ml-8"></img>
        </div>
      </div>
      <div className="mt-[43px] w-full ">
        <Menu highlighted={highlighted} routingAcount={routingAcount} />
      </div>
      <div className="flex w-full justify-center lg:justify-end mt-[76px] items-center">
        <img src="/image/Arrows/logout.svg" />
        <div
          className="cursor-pointer ml-3 font-normal not-italic text-[16px] leading-[28px] text-[#FD7A55]"
          onClick={logout}
        >
          Выйти
        </div>
      </div>
    </div>
  );
}
