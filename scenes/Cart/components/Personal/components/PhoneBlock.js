import React from "react";
import InputMask from "react-input-mask";

export default function PhoneBlock({ user, setUser }) {
  return (
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
  );
}
