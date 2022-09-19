import React from "react";
import Text2 from "./Text/Text2";
import TitleFirst from "./TitleFirst";
import Button from "../../../components/atoms/Buttons/Button/Button";
import Roundblur52 from "../../../components/atoms/Rounds/Roundblur52";

export default function TitleBlock() {
  const x=0
  return (
    <div className="min-w-[983px] m-auto mt-[100px] flex flex-col items-center">
      <div className=" flex">
        <div className="mr-[-10%] ml-[10%]">
          <Roundblur52 color={"blue"} />
        </div>
        <div className=" w-[983px] h-[174px]">
          <TitleFirst></TitleFirst>
        </div>
      </div>
      <div className=" w-[579px] h-[56px]">
        <Text2 />
      </div>
      <div className="mt-[44px]">
        <Button type={"static"}> Задать вопрос</Button>
      </div>
    </div>
  );
}
