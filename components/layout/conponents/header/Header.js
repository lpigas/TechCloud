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
  const links = [
    {link:'/', id:'url_home',title:'О нас'},
    {link:'/shop', id:'url_shop',title:'Магазин'},
    {link:'/services', id:'url_services',title:'Услуги'},
    {link:'/FAQ', id:'url_FAQ',title:'FAQ'},
  ]
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
          className="flex h-full w-full justify-between items-center min-w-[1185px]"
        >
          <div className="flex">
            <Image
              onClick={() => router.push("/")}
              src={"/image/logo1_1.png"}
              width={101}
              height={62}
              className={"mt-2"}
            />
          </div>
          <div className="flex justify-between w-4/5 mx-32 items-center">
            {links.map(item=>
          <Link
            href={item.link}
            id={item.id}
          >
            {item.title}
          </Link>

            )}


          <Select
            id="react-select-2-live-region"
            className="mt-[12px] border-box w-[160px] bg-[#FFFFFF] rounded-[30px]"
            pageSize={20}
            defaultInputValue={lang[0].value}
            defaultValue={"Русский"}
            options={lang}
          ></Select>
          </div>
          <div className="items-center flex h-full">
            <a
              href={`${
                !loginData
                  ? "/login"
                  ///auth/login
                  : loginData.role === "admin"
                  ? process.env.ADMIN_PATH
                  : process.env.USER_PATH
              }`}
            >
              <img
                src={"/image/group.svg"}
                className="w-[22px] mr-10 h-[22px]"
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
