import { useRouter } from "next/router";
import React from "react";
import Button from "../../../components/atoms/Buttons/Button/Button";

export default function Empty() {
  const router = useRouter();
  return (
    <div className="pb-4 flex flex-col items-center justify-center w-full">
      <div className=" w-full pb-4 text-center font-bold not-italic break-all text-[50px] leading-[70px] text-[#3E3F50]">
        Корзина пуста
      </div>
      <Button type={"static"} onClick={() => router.push("/")}>
        {" "}
        Возрат на главную
      </Button>
    </div>
  );
}
