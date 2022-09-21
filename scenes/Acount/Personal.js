import React, { useEffect } from "react";
import { useState } from "react";
import ChangePassBlock from "./Components/Personal/ChangePassBlock";
import Personalblock from "./Components/Personal/Personalblock";

export default function Personal({
  user,
  setUser,
  changePassword,
  setChangePassword,
}) {
  const [openLoader, setOpenLoader] = useState(false);
  const [openLoaderPass, setOpenLoaderPass] = useState(false);
  const [newUserData, setNewUserData] = useState(user);
  const [messageChange, setMessageChange] = useState();
  const [messageChangeUser, setMessageChangeUser] = useState();
  const [token, setToken] = useState();
  const changePass = async () => {
    if (changePassword.old.length === 0) {
      return setMessageChange("Старый пароль не заполен");
    } else if (changePassword.newpass.length < 6) {
      return setMessageChange("Новый пароль заполен менее 6 символов");
    } else if (changePassword.newpass !== changePassword.secondNewpass) {
      return setMessageChange("Пароли не совпадают");
    }
    setOpenLoaderPass(true);
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
    setOpenLoaderPass(false);
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
    if (newUserData.urfis && newUserData.urfis.length < 1) {
      return setMessageChangeUser("Не установлен тип пользователя");
    } else if (newUserData.name && newUserData.name.length < 2) {
      return setMessageChangeUser("Не установлено имя пользователя");
    } else if (newUserData.sername && newUserData.sername.length < 2) {
      return setMessageChangeUser("Не установлена фамилия пользователя");
    } else if (newUserData.phone.length < 13) {
      return setMessageChangeUser("Не установлен телефон пользователя");
    }
    setOpenLoader(true);

    try {
      const data = await fetch(`${process.env.API_HOST}changeUserData`, {
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
      setToken(datas.token);

      setMessageChangeUser(datas.message !== "ok" && datas.message);
    } catch (error) {
      console.log(error);
    }
    setOpenLoader(false);
  };
  useEffect(() => {
    if (token) {
      if (typeof window !== "undefined") {
        const data = window.localStorage.setItem(
          "token",
          JSON.stringify(token)
        );
        setMessageChange("ok");
      }
      window.location.reload();
    }
  }, [token]);

  return (
    <div className="bg-[#F9F9FC] w-full lg:w-2/3 max-w-full pb-10 ">
      <div className="mt-[83px] lg:ml-[68px]  ">
        <div className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50]">
          Персональная информация
        </div>
        <div className="mt-[36px]">
          {user && (
            <Personalblock
              user={newUserData}
              setUser={setNewUserData}
              changeUserData={changeUserData}
              openLoader={openLoader}
              messageChangeUser={messageChangeUser}
            />
          )}
        </div>
      </div>
      <div className="mt-[83px] ml-[68px]">
        <div className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50]">
          Изменить пароль
        </div>
        <div className="mt-[36px]">
          {user && (
            <ChangePassBlock
              changePassword={changePassword}
              setChangePassword={setChangePassword}
              changePass={changePass}
              messageChange={messageChange}
              openLoaderPass={openLoaderPass}
            />
          )}
        </div>
      </div>
    </div>
  );
}
