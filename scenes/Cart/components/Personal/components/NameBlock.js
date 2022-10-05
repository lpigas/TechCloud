import React from "react";
import StandartInput from "../../../../../components/atoms/Input/StandartInput";

export default function NameBlock({ user, setUser }) {
  return (
    <div className="mt-[-12px ]">
      <StandartInput
        type={"text"}
        placeholder="Имя"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        value={user.name}
      />
      <StandartInput
        type={"text"}
        placeholder="Фамилия"
        onChange={(e) => setUser({ ...user, sername: e.target.value })}
        value={user.sername}
      />
    </div>
  );
}
