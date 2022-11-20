import React, { useEffect } from "react";
import { useState } from "react";
import ChangePassBlock from "./components/components/Personal/ChangePassBlock";
import Personalblock from "./components/components/Personal/Personalblock";

export default function Personal({
  user,
  changePassword,
  setChangePassword,
  sub,
}) {

  const [openLoader, setOpenLoader] = useState(false);
  const [openLoaderPass, setOpenLoaderPass] = useState(false);
  const [newUserData, setNewUserData] = useState(user);
  const [messageChangePass, setMessageChangePass] = useState();
  const [messageChangeUser, setMessageChangeUser] = useState();
  const [token, setToken] = useState();

  const changePass = async () => {
    if (changePassword.newpass.length < 8) {
      return setMessageChangePass("Новый пароль заполен менее 8 символов");
    }
    if (changePassword.newpass.search(/[A-Z]/) < 0) {
      return setMessageChangePass(
        "Ваш пароль должен содержать хотя бы одну заглавную букву"
        );
      }
      if (changePassword.newpass.search(/[0-9]/) < 0) {
        return setMessageChangePass("Ваш пароль должен содержать хотя бы одну цифру");
      }
      if (changePassword.newpass !== changePassword.secondNewpass) {
        return setMessageChangePass("Пароли не совпадают");
      }
      
      setOpenLoaderPass(true);
      setMessageChangePass();
    try {
      const data = await fetch(`${process.env.API_HOST}changeUserPass`, {
        method: "POST",
        body: JSON.stringify({
          sub: sub,
          newPassword: changePassword.newpass,
        }),
      });
      const datas = await data.json();
      setMessageChangePass(datas.message);
      datas.message === "ok" &&
        setChangePassword({ newpass: "", secondNewpass: "" });
    } catch (error) {
      console.log(error);
    }
    setOpenLoaderPass(false);
  };

  useEffect(() => {
    if (messageChangePass) {
      setTimeout(() => {
        setMessageChangePass();
      }, 3000);
    }
  }, [messageChangePass]);

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
    } else if (newUserData.surname && newUserData.surname.length < 2) {
      return setMessageChangeUser("Не установлена фамилия пользователя");
    } else if (newUserData.phone.length < 13) {
      return setMessageChangeUser("Не установлен телефон пользователя");
    }
    setOpenLoader(true);
    try {
      const data = await fetch(`${process.env.API_HOST}changeUserData`, {
        method: "POST",
        body: JSON.stringify({
          email: user.email,
          urfis: newUserData.urfis,
          name: newUserData.name,
          surname: newUserData.surname,
          phone: newUserData.phone,
          country: newUserData.country,
          city: newUserData.city,
        }),
      });
      const tokenJson = await data.json();
      setToken(tokenJson.token);

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
        setMessageChangePass("ok");
      }
      window.location.reload();
    }
  }, [token]);

  return (
    <div className="bg-[#F9F9FC] w-full lg:w-2/3 max-w-full pb-18">
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
      <div className="my-[83px] lg:ml-[68px]">
        <div className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50]">
          Изменить пароль
        </div>
        <div className="mt-[36px]">
          {user && (
            <ChangePassBlock
              changePassword={changePassword}
              setChangePassword={setChangePassword}
              changePass={changePass}
              messageChangePass={messageChangePass}
              openLoaderPass={openLoaderPass}
            />
          )}
        </div>
      </div>
    </div>
  );
}
