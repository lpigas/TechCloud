import React from "react";
import StandartInput from "../../../../../components/atoms/Input/StandartInput";

export default function EmailBlock({ user, setUser }) {
  //
  return (
    <StandartInput
      type={"text"}
      onChange={e => setUser({...user, email: e.target.value})}
      value={user.email}
      placeholder={"Email"}
    />
  );
}
