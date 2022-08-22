import React from "react";
import Vectors from "./Main/Vectors";
import Clouds from "./Main/Clouds";
import Windows from "./Main/Windows";
import Certificate from "./Main/Certificate";

export default function Main() {
  return (
    <div className="flex w-[1019px] h-[490px]">
      <Vectors />
      <Clouds />
      <Windows />
      <Certificate />
    </div>
  );
}
