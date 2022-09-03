import React, { useEffect } from "react";
import { useState } from "react";
import ChangePassBlock from "./Personal/ChangePassBlock";
import Personalblock from "./Personal/Personalblock";

export default function Personal({
  user,
  setUser,
  changePassword,
  setChangePassword,
}) {
  const [newUserData, setNewUserData] = useState(user);
  const [messageChange, setMessageChange] = useState();
  const [messageChangeUser, setMessageChangeUser] = useState();
  const changePass = async () => {
    if (changePassword.old.length === 0) {
      return setMessageChange("Старый пароль не заполен");
    } else if (changePassword.newpass.length < 6) {
      return setMessageChange("Новый пароль заполен менее 6 символов");
    } else if (changePassword.newpass !== changePassword.secondNewpass) {
      return setMessageChange("Пароли не совпадают");
    }
    setMessageChange();
    try {
      const data = await fetch(`${process.env.API_HOST}changeUserPass`, {
        method: "POST",
        body: JSON.stringify({
          email: user.email,
          oldpass: changePassword.old,
          newpass: changePassword.newpass,
        }),
      });
      const datas = await data.json();
      setMessageChange(datas.message);
      datas.message === "ok" &&
        setChangePassword({ old: "", newpass: "", secondNewpass: "" });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (messageChange) {
      setTimeout(() => {
        setMessageChange();
      }, 3000);
    }
  }, [messageChange]);

  useEffect(() => {
    if (messageChangeUser) {
      setTimeout(() => {
        setMessageChangeUser();
      }, 3000);
    }
  }, [messageChangeUser]);

  const changeUserData = async () => {
    if (user.urfis.length < 1) {
      return setMessageChangeUser("Не установлен тип пользователя");
    } else if (user.name.length < 2) {
      return setMessageChangeUser("Не установлено имя пользователя");
    } else if (user.sername.length < 2) {
      return setMessageChangeUser("Не установлена фамилия пользователя");
    } else if (user.phone.length < 13) {
      return setMessageChangeUser("Не установлен телефон пользователя");
    } else if (!(user.email.includes("@") && user.email.includes("."))) {
      return setMessageChangeUser("Не email");
    }

    try {
      const data = await fetch("/api/changeUserData", {
        method: "POST",
        body: JSON.stringify({
          oldemail: user.email,
          urfis: newUserData.urfis,
          name: newUserData.name,
          sername: newUserData.sername,
          phone: newUserData.phone,
          email: newUserData.email,
          country: newUserData.country,
          city: newUserData.city,
        }),
      });
      const datas = await data.json();
      const token = datas.token;
      if (typeof window !== "undefined") {
        const data = window.localStorage.setItem(
          "token",
          JSON.stringify(token)
        );
      }
      setMessageChangeUser(datas.message);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  console.log(user);

  return (
    <div className="bg-[#F9F9FC] w-full">
      <div className="mt-[83px] ml-[128px] w-[781px] h-[788px]">
        <div className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50]">
          Персональная информация
        </div>
        <div className="mt-[36px]">
          {user && (
            <Personalblock
              user={newUserData}
              setUser={setNewUserData}
              changeUserData={changeUserData}
              messageChangeUser={messageChangeUser}
            />
          )}
        </div>
      </div>
      <div className="mt-[76px] ml-[128px] w-[781px] h-[495px]">
        <div className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50]">
          Персональная информация
        </div>
        <div className="mt-[36px]">
          {user && (
            <ChangePassBlock
              changePassword={changePassword}
              setChangePassword={setChangePassword}
              changePass={changePass}
              messageChange={messageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}
