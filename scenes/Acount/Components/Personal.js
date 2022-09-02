import React from "react";
import Personalblock from "./Personal/Personalblock";

export default function Personal({ user, setUser, reset }) {
  return (
    <div className="bg-[#F9F9FC] w-full">
      <div className="mt-[83px] ml-[128px] w-[781px] h-[788px]">
        <div className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50]">
          Персональная информация
        </div>
        <div className="mt-[36px]">
          <Personalblock user={user} setUser={setUser} reset={reset} />
        </div>
      </div>
    </div>
  );
}
