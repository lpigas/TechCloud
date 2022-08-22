import React from "react";
import Text2 from "./components/Text/Text2";
import TitleFirst from "./components/TitleFirst";
import Button from "../../components/atoms/Buttons/Button/Button";
import Roundblur52 from "../../components/atoms/Rounds/Roundblur52";

export default function TitleBlock() {
  return (
    <div className="w-[983px] h-[346px] flex flex-col items-center">
      <div className="absolute top-[184px] left-[1372px]">
        <Roundblur52 color={"blue"} />
      </div>
      <div className=" w-[983px] h-[174px]">
        <TitleFirst></TitleFirst>
      </div>
      <div className=" w-[579px] h-[56px]">
        <Text2 />
      </div>
      <div className="mt-[44px]">
        <Button type={"Static"}> Задать вопрос</Button>
      </div>
    </div>
  );
}
