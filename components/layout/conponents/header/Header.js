import React, { useEffect, useState } from "react";
import Image from "next/image";
import Cart from "./components/Cart";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import jwt from "jsonwebtoken";
import Select from "react-select";

export default function Header({ title }) {
  const lang = [{ value: "Русский", label: "Русский" }];
  const router = useRouter();
  const [loginData, setLoginData] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = JSON.parse(window.localStorage.getItem("token"));
      setLoginData(jwt.decode(token));
    }
  }, []);

  return (
    <header className="flex h-[68px] min-w-full">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex mx-auto w-max-60vw flex-col flex-wrap items-start justify-start">
        <nav
          id="menu"
          className="flex h-full w-full  items-center gap-[70px] p-0 min-w-[1185px]"
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
          <Select
            id="react-select-2-live-region"
            className="mt-[12px] border-box w-[160px] bg-[#FFFFFF] rounded-[30px]"
            pageSize={20}
            defaultInputValue={lang[0].value}
            defaultValue={"Русский"}
            options={lang}
          ></Select>
          <div className="items-center ml-10 flex h-full">
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
        </nav>
      </div>
    </header>
  );
}
