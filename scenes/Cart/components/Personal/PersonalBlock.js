import React, { useState } from "react";
import EmailBlock from "./components/EmailBlock";
import NameBlock from "./components/NameBlock";
import PhoneBlock from "./components/PhoneBlock";
import UrfisBlock from "./components/UrfisBlock";

export default function PersonalBlock({ user, setUser }) {
  return (
    <div className="">
      <div>
        <UrfisBlock user={user} setUser={setUser} />
      </div>
      <div className="mt-[46px] ser:w-4/5 bg-white rounded-[10px] ser:px-8 py-8 ser:rounded-[30px] ">
        <NameBlock user={user} setUser={setUser} />
        <PhoneBlock user={user} setUser={setUser} />
        <EmailBlock user={user} setUser={setUser} />
      </div>
    </div>
  );
}
