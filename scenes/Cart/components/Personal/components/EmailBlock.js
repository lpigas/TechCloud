import React from "react";
import StandartInput from "../../../../../components/atoms/Input/StandartInput";

export default function EmailBlock({ user, setUser }) {
  return (
    <StandartInput
      type={"text"}
      value={user.email}
      placeholder={"Email"}
      onChange={(e) => setUser({ ...user, email: e.target.value })}
    />
  );
}
