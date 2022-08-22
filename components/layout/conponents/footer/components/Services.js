import React from "react";
import Link from "next/link";

export default function Services() {
  return (
    <div>
      <div className="font-medium not-italic text-[24px] leading-[28px] w-[276px] h-[28px] text-[#3E3F50]">
        Услуги
      </div>
      <div className="mt-[22px] top-[50px] font-normal not-italic text-[18px] leading-[36px] w-[276px] h-[252px] text-[#616E87]">
        <p>
          <Link href={""}> ИТ Консалтинг</Link>
        </p>
        <p>
          <Link href={""}>ИТ Аутсорсинг (удаленно)</Link>
        </p>
        <p>
          <Link href={""}>Аренда выделенных серверов</Link>
        </p>
        <p>
          <Link href={"/services/sloudserver"}>Облачный сервер </Link>
        </p>
        <p>
          <Link href={""}>Кибербезопасность </Link>
        </p>
        <p>
          <Link href={""}>Автоматизация </Link>
        </p>
        <p>
          <Link href={""}>Подписки на облачный софт </Link>
        </p>
      </div>
    </div>
  );
}
