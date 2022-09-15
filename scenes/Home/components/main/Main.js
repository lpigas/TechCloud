import React from "react";
import Vectors from "./components/Vectors";
import Clouds from "./components/Clouds";
import Windows from "./components/Windows";
import Certificate from "./components/Certificate";

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
