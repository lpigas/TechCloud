import React from "react";
import Image from "next/image";
import Cart from "./components/Cart";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="w-[1185px] h-[68px]">
      <nav
        id="menu"
        className="absolute flex flex-row items-start gap-[70px] p-o top-[47px] left-[303px] w-[422px] h-[28px]"
      >
        <div id="Frame_1" className="w-[47px] h-[28px] gap-[53px] p-0">
          О нас
        </div>
        <Link
          href={"/Shop"}
          id="Frame_2"
          className="w-[73px] h-[28px] gap-[53px] p-0"
        >
          Магазин
        </Link>
        <Link
          href={"/Services"}
          id="Frame_3"
          className="w-[57px] h-[28px] gap-[53px] p-0"
        >
          Услуги
        </Link>
        <div id="Frame_4" className="w-[47px] h-[28px] gap-[53px] p-0">
          FAQ
        </div>
      </nav>
      <div className="absolute left-[0px] top-[4px] z-[999]">
        <Image
          onClick={() => router.push("/")}
          src={"/image/logo1_1.png"}
          width={101}
          height={62}
        />
      </div>

      <div className="absolute top-[-4px] left-0 w-[1920px] h-[5382] invisible"></div>
      <select
        id="lang"
        className="absolute w-[129px] h-[45px] text-center top-[35px] left-[781px] rounded-[50px]"
      >
        <option value={"Русскмй"}>Русский</option>
      </select>

      <img
        src={"/image/group.svg"}
        className="absolute top-[47px] left-[1076px] w-[22px] h-[22px]"
      />
      <div className="w-[34px] h-[57px] absolute top-[44px] left-[1151px]">
        <Cart />
      </div>
    </header>
  );
}
