import { useRouter } from "next/router";
import React from "react";
import Button from "../../../../components/atoms/Buttons/Button/Button";

export default function Thanks() {
  const router = useRouter();
  return (
    <div className="flex justify-center ser:w-8/12  m-auto ">
      <div className="text-[20px] font-normal text-[#616E87] leading-[34px] w-full ser:mt-[25px] mb-[50px] ser:mb-[200px]">
        <p className="break-normal mb-2 flex justify-start w-full">
          Мы свяжемся с вами в ближайшее время.
        </p>
        <div className="flex justify-end mt-[25px]">
          <Button onClick={() => router.push("/")}>Возврат на главную</Button>
        </div>
      </div>
    </div>
  );
}
