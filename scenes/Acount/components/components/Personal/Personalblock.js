import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import Select from "react-select";
import Buttons from "../../../../../components/atoms/Buttons/Button";
import StandartInput from "../../../../../components/atoms/Input/StandartInput";
import Loader from "../../../../../components/atoms/Loader/Loader";

export default function Personalblock({
  user,
  setUser,
  changeUserData,
  messageChangeUser,
  openLoader,
}) {
  const [countrys, setCountrys] = useState();
  const reset = () => {
    window.location.reload();
  };
  const getCountrys = async () => {
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const gets = await data.json();
      const all = [];
      gets
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .map((item) =>
          all.push({
            value: item.name.common,
            label: item.name.common,
          })
        );
      setCountrys(all);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountrys();
  }, []);
  console.log(user.urfis)

  return (
    <div className="w-9/10 lg:w-4/5 pt-[56px] lg:mr-10 px-2 lg:px-[50px] rounded-[20px] pb-8 lg:rounded-[50px] bg-[#ffffff]">
      <div className="lg:pr-12">
        <div
          onChange={(e) => setUser({ ...user, urfis: e.target.value })}
          className={"flex flex-col"}
        >
          <label className="flex">
            <input
              defaultChecked={user.urfis === "Физическое лицо"}
              className="w-[23px] h-[23px]"
              id="Физическое лицо"
              type={"radio"}
              value="Физическое лицо"
              name={"typeUser"}
            />
            <div className="flex ml-[20px] font-normal not-italic text-[14px] leading-[28px]">
              Физическое лицо
            </div>
          </label>
          <label className="flex">
            <input
              defaultChecked={user.urfis === "Юридическое лицо"}
              id="Юридическое лицо"
              className="w-[23px] h-[23px]"
              type={"radio"}
              value="Юридическое лицо"
              name={"typeUser"}
            />
            <div className="flex ml-[20px] font-normal not-italic text-[14px] leading-[28px]">
              Юридическое лицо
            </div>
          </label>
        </div>
        <StandartInput
          type={"text"}
          placeholder={`Name`}
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <StandartInput
          type={"text"}
          placeholder={`Surname`}
          value={user.surname}
          onChange={(e) => setUser({ ...user, surname: e.target.value })}
        />

        <InputMask
          type={"tel"}
          placeholder={"+38 (099) 912-32-31"}
          value={user.phone || ""}
          mask={`+99(999) 999-99-99`}
          maskChar="_"
          alwaysShowMask={false}
          className=" border-box mt-[12px] pl-[12px] w-full h-[50px] bg-[#FFFFFF] rounded-[10px] border-[1px] border-[#E4E4ED]"
          onChange={(e) =>
            setUser({
              ...user,
              phone: e.target.value,
            })
          }
        />

        <Select
          id="react-select-2-live-region"
          onChange={(e) => setUser({ ...user, country: e.value })}
          className="mt-[12px] border-box w-full h-[px] bg-[#FFFFFF] rounded-[10px] border-[1px]"
          pageSize={10}
          placeholder={"Country"}
          defaultInputValue={`${user.country}`}
          escapeClearsValue={`${user.country}`}
          options={countrys}
        />
        <StandartInput
          type={"text"}
          placeholder={`City`}
          value={user.city}
          onChange={(e) => setUser({ ...user, city: e.target.value })}
        />

        {openLoader && (
          <div className="mt-2">
            <Loader />{" "}
          </div>
        )}
        <div className="mt-[54px] flex justify-between">
          <Buttons onClick={changeUserData} type={"static"}>
            Сохранить
          </Buttons>
          <div className=""></div>
          <button
            onClick={reset}
            className="ml-[38px] font-medium not-italic text-[16px] leading-[28px] text-[#3E3F50]"
          >
            Отменить изменения
          </button>
        </div>
        <div
          className={`${
            messageChangeUser === "ok" ? "text-green-500" : "text-red-500"
          } mt-10`}
        >
          {messageChangeUser}
        </div>
      </div>
    </div>
  );
}
