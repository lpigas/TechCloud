import React from "react";
import Text2 from "./components/Text/Text2";
import TitleFirst from "./components/TitleFirst";
import Button from "../../components/atoms/Buttons/Button/Button";
import Roundblur52 from "../../components/atoms/Rounds/Roundblur52";

export default function TitleBlock() {
  return (
    <div>
      <div className="absolute top-[0px] left-[913px]">
        <Roundblur52 color={"blue"} />
      </div>
      <div className="absolute w-[983px] h-[174px] top-[15px] left-0">
        <TitleFirst></TitleFirst>
      </div>
      <div className="absolute w-[579px] h-[56px] top-[177px] left-[201px]">
        <Text2 />
      </div>
      <div className="absolute top-[276px] left-[353px]">
        <Button type={"Static"}> Задать вопрос</Button>
      </div>
    </div>
  );
}
