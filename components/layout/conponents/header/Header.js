import React, { useEffect, useState } from "react";
import Image from "next/image";
import Cart from "./components/Cart";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import jwt from "jsonwebtoken";

export default function Header({ title }) {
  const router = useRouter();
  const [loginData, setLoginData] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = JSON.parse(window.localStorage.getItem("token"));
      setLoginData(jwt.decode(token));
    }
  }, []);

  console.log(loginData);

  return (
    <header className="flex h-[68px]">
      <Head>
        <title>{title}</title>
      </Head>
      <nav
        id="menu"
        className="flex ml-[368px] mr-[168px] h-full items-center gap-[70px] p-0 w-[985px]"
      >
        <div className="flex z-[999]">
          <Image
            onClick={() => router.push("/")}
            src={"/image/logo1_1.png"}
            width={101}
            height={62}
            className={"mt-2"}
          />
        </div>
        <div
          id="Frame_1"
          className="ml-[202px] w-[47px] h-[28px] gap-[53px] p-0"
        >
          О нас
        </div>
        <Link
          href={"/shop"}
          id="Frame_2"
          className="w-[73px] h-[28px] gap-[53px] p-0"
        >
          Магазин
        </Link>
        <Link
          href={"/services"}
          id="Frame_3"
          className="w-[57px] h-[28px] gap-[53px] p-0"
        >
          Услуги
        </Link>
        <Link
          href={"/FAQ"}
          id="Frame_4"
          className="w-[47px] h-[28px] gap-[53px] mt-1"
        >
          FAQ
        </Link>
        <select
          id="lang"
          className=" w-[129px] h-[45px] text-center rounded-[50px]"
        >
          <option value={"Русский"}>Русский</option>
        </select>
      </nav>
      <div className="items-center flex">
        <a
          href={`${
            !loginData
              ? "/login"
              : loginData.role === "admin"
              ? process.env.ADMIN_PATH
              : process.env.USER_PATH
          }`}
        >
          <img
            src={"/image/group.svg"}
            className="w-[22px] m-[53px] h-[22px]"
          />
        </a>
        <div className="w-[34px] mt-[26px] h-[57px]">
          <Cart />
        </div>
      </div>
    </header>
  );
}
