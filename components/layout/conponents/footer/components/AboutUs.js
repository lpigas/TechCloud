import React from "react";
import Link from "next/link";

export default function AboutUs() {
  const links = [
    { title: "О нас", href: "/" },
    { title: "Магазин", href: "/shop" },
    { title: "FAQ", href: "/FAQ" },
  ];
  return (
    <div className="font-normal text-left not-italic text-[18px] leading-[36px] min-w-[235px] min-h-[108px] text-[#616E87]">
      {links.map((item) => (
        <p key={item.href}>
          <Link href={item.href}>{item.title}</Link>
        </p>
      ))}
    </div>
  );
}
