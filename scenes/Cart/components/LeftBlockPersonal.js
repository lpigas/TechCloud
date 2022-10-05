import React from "react";
import PersonalBlock from "./Personal/PersonalBlock";

export default function LeftBlockPersonal({ user, setUser, errorMessage }) {
  return (
    <div className="bg-[#F9F9FC] w-full ser:w-3/5 flex ser:justify-end">
      <div className="ser:w-3/4 pb-4 ser:pl-2">
        <div className="ser:mt-[46px] flex">
          <p className="text-[16px] font-bold mr-8">1. Ваша корзина</p>{" "}
          <div className="text-[16px] font-bold mr-8">2. Оформить заказ</div>
        </div>
        <div className="mt-[35px] pb-4">
          <PersonalBlock user={user} setUser={setUser} />
          <div className="text-red-600"> {errorMessage}</div>
        </div>
      </div>
    </div>
  );
}
