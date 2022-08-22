import React from "react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="font-normal not-italic text-[18px] leading-[36px] w-[235px] h-[108px] text-[#616E87]">
      <p>
        <Link href={""}>О нас</Link>
      </p>
      <p>
        <Link href={"/shop"}>Мвгвзин</Link>
      </p>
      <p>
        <Link href={"/FAQ"}>FAQ</Link>
      </p>
    </div>
  );
}
