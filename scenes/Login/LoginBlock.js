import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../../components/atoms/Buttons/Button/Button";
import jwt from "jsonwebtoken";

export default function LoginBlock({
  view,
  setView,
  enterLogin,
  setEnterLogin,
}) {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [message, setMessage] = useState();
  async function getToken() {
    const get = await fetch(`${process.env.API_HOST}login`, {
      method: "POST",
      body: JSON.stringify(enterLogin),
    });
    // // reload the page
    const gets = await get.json();
    // console.log(gets.message)
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
      fullinfo.role === "admin"
        ? router.push(process.env.ADMIN_PATH)
        : router.push(process.env.USER_PATH);
    }
  }

  return (
    <div className="w-[882px] h-[487px] flex bg-[#FFFFFF] rounded-[50px]">
      <div className="mt-[71px] ml-[101px]">
        <p className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50] h-[28px]">
          Введите Ваш логин и пароль:
        </p>

        <form className="mt-[33px]">
          <input
            type={"email"}
            placeholder={"E-mail"}
            name="email"
            className="border-box w-[579px] h-[50px] bg-[#FFFFFF] rounded-[10px] border-[3px] border-[#E4E4ED]"
            required
            value={enterLogin.email}
            onChange={(e) =>
              setEnterLogin({ ...enterLogin, email: e.target.value })
            }
          />
          <div className="flex">
            <input
              type={`${view === "text" ? "text" : "password"}`}
              placeholder={"Password"}
              name="password"
              required
              value={enterLogin.password}
              minLength={1}
              className="mt-[12px] border-box w-[579px] h-[50px] bg-[#FFFFFF] rounded-[10px] border-[3px] border-[#E4E4ED]"
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
          <div className="mt-[48px]">
            {/* <input type='submit' value={'enter'}></input> */}
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
        <Button type={"Static"} onClick={getToken}>
          Войти
        </Button>
      </div>
    </div>
  );
}
