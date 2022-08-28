import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../../components/atoms/Buttons/Button/Button";
import InputMask from "react-input-mask";
import Select from "react-select";

export default function RegistrationBlock({
  view,
  setView,
  newUser,
  setNewUser,
}) {
  console.log(newUser);
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


  console.log(newUser)
  return (
    <div className="w-[882px] min-h-[487px] mt-[118px] flex bg-[#FFFFFF] rounded-[50px]">
      <div className="mt-[71px] ml-[101px]">
        <p className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50] h-[28px]">
          Введите данные для регистрации:
        </p>

        <form className="mt-[33px]">
          <input
            type={"text"}
            placeholder={"Login"}
            minLength={2}
            required
            className="border-box w-[579px] h-[50px] bg-[#FFFFFF] rounded-[10px] border-[3px] border-[#E4E4ED]"
            onChange={(e) => setNewUser({ ...newUser, login: e.target.value })}
          />
          <div className="flex">
            <input
              type={`${view === "text" ? "text" : "password"}`}
              placeholder={"Password"}
              minLength={8}
              required
              className="mt-[12px] border-box w-[579px] h-[50px] bg-[#FFFFFF] rounded-[10px] border-[3px] border-[#E4E4ED]"
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
          <input
            type={"text"}
            placeholder={"Name"}
            minLength={2}
            className="mt-[12px] border-box w-[579px] h-[50px] bg-[#FFFFFF] rounded-[10px] border-[3px] border-[#E4E4ED]"
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type={"text"}
            placeholder={"Sername"}
            minLength={2}
            required
            className="mt-[12px] border-box w-[579px] h-[50px] bg-[#FFFFFF] rounded-[10px] border-[3px] border-[#E4E4ED]"
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
            className=" border-box mt-[12px] w-[579px] h-[50px] bg-[#FFFFFF] rounded-[10px] border-[3px] border-[#E4E4ED]"
            onChange={(e) =>
              setNewUser({
                ...newUser,
                phone:  e.target.value 
              })
            }
          />

          <input
            type={"email"}
            placeholder={"Email"}
            required
            minLength={2}
            className="mt-[12px] border-box w-[579px] h-[50px] bg-[#FFFFFF] rounded-[10px] border-[3px] border-[#E4E4ED]"
            onChange={(e) =>
              setNewUser({ ...newUser, email: e.target.value })
            }
          />
          <Select
            id="react-select-2-live-region"
            onChange={(e) => setNewUser({ ...newUser, country: e.value })}
            classNamePrefix=" p-[120px]"
            className="mt-[12px] border-box w-[379px] bg-[#FFFFFF] rounded-[10px]"
            pageSize={20}
            placeholder={"Country"}
            options={countrys}
          ></Select>

          <input
            type={"text"}
            placeholder={"City"}
            minLength={2}
            className="mt-[12px] border-box w-[579px] h-[50px] bg-[#FFFFFF] rounded-[10px] border-[3px] border-[#E4E4ED]"
            onChange={(e) =>
              setNewUser({ ...newUser, city: e.target.value })
            }
          />

          <div className="mt-[48px]">
            <Button type={"Static"}>Зарегистрировать</Button>
            <div className="flex w-[377px] h-[50px] mt-[44px] items-center"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
