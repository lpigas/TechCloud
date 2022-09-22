import React, { useState } from "react";
import Buttons from "../../../../components/atoms/Buttons/Button/Button";
import StandartInput from "../../../../components/atoms/Input/StandartInput";
import Loader from "../../../../components/atoms/Loader/Loader";

export default function ChangePassBlock({
  changePassword,
  setChangePassword,
  changePass,
  messageChange,
  openLoaderPass,
}) {
  const [oldPassView, setOldPassView] = useState("password");
  const [newPassView, setNewPassView] = useState("password");
  const [secondPassView, setSecondPassView] = useState("password");
  const reset = () => {
    setChangePassword({ old: "", newpass: "", secondNewpass: "" });
  };

  return (
    <div className="w-9/10 lg:w-4/5 pt-[56px] lg:mr-10 px-2 lg:px-[50px] rounded-[20px] pb-8 lg:rounded-[50px] bg-[#ffffff]">
      <div className="lg:pr-12">
        
        <div className="flex">
          <StandartInput
            type={`${oldPassView === "text" ? "text" : "password"}`}
            placeholder={"Введите старый пароль"}
            name="password"
            required
            value={changePassword.old}
            className="border-box mt-[12px] pl-[12px] w-full h-[50px] bg-[#FFFFFF] rounded-[10px] border-[1px] border-[#E4E4ED]"
            onChange={(e) =>
              setChangePassword({ ...changePassword, old: e.target.value })
            }
          />
          <img
            src="/image/Arrows/view.svg"
            className="ml-[-45px] mt-[25px] w-[22px] h-[22px]"
            onClick={() => setOldPassView(oldPassView === "text" ? "" : "text")}
          />
        </div>
        <div className="flex ">
          <StandartInput
            type={`${newPassView === "text" ? "text" : "password"}`}
            placeholder={"Введите новый пароль"}
            name="password"
            required
            value={changePassword.newpass}
            minLength={6}
            onChange={(e) =>
              setChangePassword({ ...changePassword, newpass: e.target.value })
            }
          />
          <img
            src="/image/Arrows/view.svg"
            className="ml-[-45px] mt-[25px] w-[22px] h-[22px]"
            onClick={() => setNewPassView(newPassView === "text" ? "" : "text")}
          />
        </div>
        <div className="flex">
          <StandartInput
            type={`${secondPassView === "text" ? "text" : "password"}`}
            placeholder={"Повторите новый пароль"}
            name="password"
            required
            value={changePassword.secondNewpass}
            className="border-box mt-[12px] pl-[12px] w-full h-[50px] bg-[#FFFFFF] rounded-[10px] border-[1px] border-[#E4E4ED]"
            onChange={(e) =>
              setChangePassword({
                ...changePassword,
                secondNewpass: e.target.value,
              })
            }
          />
          <img
            src="/image/Arrows/view.svg"
            className="ml-[-45px] mt-[25px] w-[22px] h-[22px]"
            onClick={() =>
              setSecondPassView(secondPassView === "text" ? "" : "text")
            }
          />
        </div>
        {openLoaderPass && (
          <div className="mt-2 h-18">
            <Loader />
          </div>
        )}
        <div className="mt-[54px] flex justify-between">
          <Buttons onClick={changePass} type={"static"}>
            Сохранить
          </Buttons>
          <button
            onClick={reset}
            className="ml-[38px] font-medium not-italic text-[16px] leading-[28px] text-[#3E3F50]"
          >
            Отменить изменения
          </button>
        </div>
        <div
          className={`${
            messageChange === "ok" ? "text-green-500" : "text-red-500"
          } mt-10`}
        >
          {messageChange && messageChange === "ok"
            ? "Password was changed"
            : messageChange}
        </div>
      </div>
    </div>
  );
}
