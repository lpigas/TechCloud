import React from "react";
import Link from "next/link";
export default function Oferta() {
  return (
    <div className="font-normal sm:hidden lg:block text-start not-italic text-[12px] leading-[14px] text-[#616E87] opacity-60 ">
      <p>Публичная оферта</p>
      <p className="underline underline-offset-2">
        <Link href={"/oferta"}>Политика конфиденциальности</Link>
      </p>
    </div>
  );
}
