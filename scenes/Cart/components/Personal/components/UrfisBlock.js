import React from "react";

export default function UrfisBlock({ user, setUser }) {
  return (
    <div onClick={(e) => setUser({ ...user, urfis: e.target.value })}>
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
  );
}
