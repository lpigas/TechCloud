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
    }
    setOpenLoader(false);
  }
  if (message) {
    setTimeout(() => {
      setMessage();
    }, 3000);
  }
  return (
    <div className="w-[882px] h-[487px] flex bg-[#FFFFFF] rounded-[50px]">
      <div className="mt-[71px] ml-[101px]">
        <p className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50] h-[28px]">
          Введите Ваш логин и пароль:
        </p>

        <form className="mt-[33px] w-[579px]">
          <StandartInput
            type={"email"}
            placeholder={`E-mail`}
            value={enterLogin.email}
            onChange={(e) =>
              setEnterLogin({ ...enterLogin, email: e.target.value })
            }
          />
          <div className="flex">
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
              className="ml-[-45px] mt-[25px] w-[22px] h-[22px]"
              onClick={() => setView(view === "text" ? "" : "text")}
            />
          </div>
          {message && (
            <div
              className={`font-normal mt-[12px] not-italic text-[20px] leading-[23px] ${
                !message.includes("Hello") ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </div>
          )}
          <div className="mt-[48px] mb-7">
            <div className="flex w-[377px] h-[40px] mt-[44px] items-center">
              <div className="font-normal not-italic text-[20px] leading-[23px] text-[#7166F9]">
                Я забыл пароль
              </div>
              <div className="mx-[11px]">|</div>
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
        <Button type={"Static"} onClick={getToken}>
          Войти
        </Button>
      </div>
    </div>
  );
}
