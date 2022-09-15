import React from "react";
import Link from "next/link";

export default function Services() {
  const links = [
    { title: "ИТ Консалтинг", href: "" },
    { title: "ИТ Аутсорсинг (удаленно)", href: "" },
    { title: "Аренда выделенных серверов", href: "" },
    { title: "Облачный сервер", href: "" },
    { title: "Кибербезопасность", href: "" },
    { title: "Автоматизация", href: "" },
    { title: "Подписки на облачный софт", href: "" },
  ];
  return (
    <div>
      <div className="font-medium text-left  not-italic text-[24px] leading-[28px] text-[#3E3F50]">
        Услуги
      </div>
      <div className="mt-[22px] font-normal text-left  not-italic text-[18px] leading-[36px] text-[#616E87]">
        {links.map((item) => (
          <p key={Math.random()}>
            <Link href={item.href}>{item.title}</Link>
          </p>
        ))}
      </div>
    </div>
  );
}
