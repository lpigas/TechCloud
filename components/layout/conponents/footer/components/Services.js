import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Services({ data }) {
  const router = useRouter();
  const RouteTo = (item) => {
    const data = window.localStorage.setItem("InfoData", JSON.stringify(item));
    if (router.pathname === "/services/servicesInfo") {
      window.location.reload();
    }
    router.push("/services/servicesInfo");
  };

  return (
    <div>
      <div className="font-medium text-left  not-italic text-[24px] leading-[28px] text-[#3E3F50]">
        Услуги
      </div>
      <div className="mt-[22px] font-normal text-left  not-italic text-[18px] leading-[36px] text-[#616E87]">
        {data.map((item) => (
          <div key={Math.random()} className="cursor-pointer">
            <div onClick={() => RouteTo(item)}>{item.title.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
