import React from "react";
import Text2 from "./text/Text2";
import TitleHome from "./TitleHome";
import Button from "../../../components/atoms/Buttons/Button";

export default function TitleBlock() {
  return (
    <div className="max-w-[1000px] m-auto lg:mt-[100px] flex flex-col items-center">
      <div className=" flex">
        <div className="flex w-full max-w-[1000px] m-auto mb-10">
          <TitleHome />
        </div>
      </div>
      <div className=" max-w-1/2 m-auto">
        <Text2 />
      </div>
      <div className="mt-[44px]">
        <Button type={"static"}> Задать вопрос</Button>
      </div>
    </div>
  );
}
