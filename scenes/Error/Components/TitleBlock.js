import Button from "../../../components/atoms/Buttons/Button/Button";
import React from "react";
import Roundblur52 from "../../../components/atoms/Rounds/Roundblur52";
import Ilustration from "./Ilustration";
import { useRouter } from "next/router";

export default function TitleBlock({ partname }) {
  const router = useRouter();
  return (
    <div className="flex pb-14 max-h-full max-w-1/2 mx-auto">
      <div className="w-full flex justify-center flex-col items-center mt-[87px] z-10">
        <div className="sm:m-0 xl:m-auto mt-[68px] flex justify-center  font-bold not-italic text-[65px] leading-[70px] text-[#3E3F50]">
          <div className="mt-[-20px] mr-[-16px]">
            <Roundblur52 color={"blue"} />
          </div>
          {partname && partname[partname.length - 1].service_name}
        </div>
        <div className="my-[215px]">
          <Ilustration />
        </div>
        <div className="mt-[105px]">
          Попробуйте проверить ссылку на наличие ошибок либо нажмите кнопку
          ниже:
        </div>
        <div className="mt-[48px]">
          <Button onClick={() => router.push("/")} type={"static"}>
            Вернуться на главную{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
