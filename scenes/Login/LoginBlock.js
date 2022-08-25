import { useRouter } from "next/router";
import React from "react";
import Button from "../../components/atoms/Buttons/Button/Button";

export default function LoginBlock({
  view,
  setView,
  enterLogin,
  setEnterLogin,
}) {
  const router = useRouter();

  return (
    <div className="w-[882px] h-[487px] flex bg-[#FFFFFF] rounded-[50px]">
      <div className="mt-[71px] ml-[101px]">
        <p className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50] h-[28px]">
          Введите Ваш логин и пароль:
        </p>

        <form className="mt-[33px]">
          <input
            type={"text"}
            placeholder={"Login"}
            className="border-box w-[579px] h-[50px] bg-[#FFFFFF] rounded-[10px] border-[3px] border-[#E4E4ED]"
            onChange={(e) =>
              setEnterLogin({ ...enterLogin, login: e.target.value })
            }
          />
          <div className="flex">
            <input
              type={`${view === "text" ? "text" : "password"}`}
              placeholder={"Password"}
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
          <div className="mt-[48px]">
            <Button type={"Static"}>Войти</Button>
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
      </div>
    </div>
  );
}
