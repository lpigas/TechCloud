import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../../components/atoms/Buttons/Button/Button";
import jwt from "jsonwebtoken";
import StandartInput from "../../components/atoms/Input/StandartInput";
import Loader from "../../components/atoms/Loader/Loader";

export default function LoginBlock({
  view,
  setView,
  enterLogin,
  setEnterLogin,
}) {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [message, setMessage] = useState();
  const [openLoader, setOpenLoader] = useState(false);
  async function getToken() {
    setOpenLoader(true);
    const get = await fetch(`${process.env.API_HOST}login`, {
      method: "POST",
      body: JSON.stringify(enterLogin),
    });
    const gets = await get.json();
    const token = gets.token;
    setToken(token);
    if (!token) {
      setMessage(gets.message);
    } else {
      const fullinfo = jwt.decode(token);
      setMessage(`Hello dear ${fullinfo.name} you are login`);
      if (typeof window !== "undefined") {
        const data = window.localStorage.setItem(
          "token",
          JSON.stringify(token)
        );
      }
      fullinfo.role === "user" && router.push(process.env.USER_PATH);
      //
    }
    setOpenLoader(false);
  }
  if (message) {
    setTimeout(() => {
      setMessage();
    }, 3000);
  }
  return (
    <div className="sm:w-full xl:w-1/2 flex bg-[#FFFFFF] justify-around rounded-[20px] xl:rounded-[50px]">
      <div className="w-full py-12 px-1 md:px-12 flex flex-col  ">
        <p className="text-center md:text-start font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50] ">
          Введите Ваш логин и пароль:
        </p>

        <form className="mt-[33px] w-full h-full ">
          <div className="flex w-full ">

          <StandartInput
            type={"email"}
            placeholder={`E-mail`}
            value={enterLogin.email}
            onChange={(e) =>
              setEnterLogin({ ...enterLogin, email: e.target.value })
            }
          />
          </div>
          <div className="flex w-full ">
            <StandartInput
              type={`${view === "text" ? "text" : "password"}`}
              placeholder={`Password`}
              value={enterLogin.password}
              onChange={(e) =>
                setEnterLogin({ ...enterLogin, password: e.target.value })
              }
            />
            <img
              src="/image/Arrows/view.svg"
              className="ml-[-45px] mt-[20px] w-[22px] h-[22px]"
              onClick={() => setView(view === "text" ? "" : "text")}
            />
          </div>
          {message && (
            <div
              className={`font-normal mt-[12px] w-max-3/4 not-italic text-[20px] leading-[23px] ${
                !message.includes("Hello") ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </div>
          )}
          <div className="mt-[48px] mb-7">
            <div className="flex-col md:flex-row flex w-max-full my-[44px] items-center">
              <div className="font-normal not-italic text-[20px] leading-[23px] text-[#7166F9]">
                Я забыл пароль
              </div>
              <div className="hidden md:flex mx-[11px]">|</div>
              <div
                onClick={() => router.push("/login/registration")}
                className="font-normal cursor-pointer not-italic text-[20px] leading-[23px] text-[#7166F9]"
              >
                Регистрация
              </div>
            </div>
          </div>
        </form>
        {openLoader && (
          <div className="mt-2">
            <Loader />
          </div>
        )}
        <div className="flex justify-center md:justify-start">
        <Button type={"static"} onClick={getToken}>
          Войти
        </Button>

        </div>
      </div>
    </div>
  );
}
