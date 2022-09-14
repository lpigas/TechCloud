import React, { useEffect, useState } from "react";
import Button from "../../components/atoms/Buttons/Button/Button";
import InputMask from "react-input-mask";
import Select from "react-select";
import StandartInput from "../../components/atoms/Input/StandartInput";
import Loader from "../../components/atoms/Loader/Loader";

export default function RegistrationBlock({
  view,
  setView,
  newUser,
  setNewUser,
  messageError,
  registerNewUser,
  openLoader,
}) {
  // console.log(newUser);
  const [countrys, setCountrys] = useState();
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
            label: item.flag + "-" + item.name.common,
            tel: item.idd.root + item.idd.suffixes,
          })
        );
      setCountrys(all);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getCountrys();
  }, []);

  return (
    <div className="w-[882px] min-h-[487px] mt-[118px] pb-[44px] flex bg-[#FFFFFF] rounded-[50px]">
      <div className="mt-[71px] ml-[101px]">
        <p className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50] h-[28px]">
          Введите данные для регистрации:
        </p>

        <form className="mt-[33px] w-[579px]">
          <StandartInput
            type={`text`}
            placeholder={`Name`}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <StandartInput
            type={`text`}
            placeholder={`Sername`}
            onChange={(e) =>
              setNewUser({ ...newUser, sername: e.target.value })
            }
          />
          <InputMask
            type={"tel"}
            placeholder={"+38 (099) 912-32-31"}
            value={newUser.phone}
            mask={`+99(999) 999-99-99`}
            maskChar="_"
            alwaysShowMask={false}
            required
            className=" border-box mt-[12px] w-full h-[50px] bg-[#FFFFFF] rounded-[10px] border-[1px] border-[#E4E4ED]"
            onChange={(e) =>
              setNewUser({
                ...newUser,
                phone: e.target.value,
              })
            }
          />

          <StandartInput
            type={`email`}
            placeholder={`Email`}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <div className="flex">
            <StandartInput
              type={`${view === "text" ? "text" : "password"}`}
              placeholder={`Password`}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
            <img
              src="/image/Arrows/view.svg"
              className="ml-[-45px] mt-[25px] w-[22px] h-[22px]"
              onClick={() => setView(view === "text" ? "" : "text")}
            />
          </div>
          <Select
            id="react-select-2-live-region"
            onChange={(e) => setNewUser({ ...newUser, country: e.value })}
            classNamePrefix=" p-[120px]"
            className="mt-[12px] border-box w-full bg-[#FFFFFF] rounded-[10px]"
            pageSize={20}
            placeholder={"Country"}
            options={countrys}
          ></Select>

          <StandartInput
            type={`text`}
            placeholder={`City`}
            onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
          />
        </form>
        {openLoader && (
          <div className="mt-2">
            <Loader />
          </div>
        )}
        <div className="mt-[48px]">
          <Button onClick={registerNewUser} type={"static"}>
            Зарегистрировать
          </Button>
        </div>
        {messageError && (
          <div className="mt-10 text-red-500">{messageError}</div>
        )}
      </div>
    </div>
  );
}
