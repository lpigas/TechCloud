import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Services({ data }) {

  return (
    <div>
      <div className="font-medium text-left  not-italic text-[24px] leading-[28px] text-[#3E3F50]">
        Услуги
      </div>
      <div className="mt-[22px] font-normal text-left  not-italic text-[18px] leading-[36px] text-[#616E87]">
        {data.map((item) => (
          <div key={item.title.name} className="cursor-pointer">
            <Link href={item.partname[item.partname.length -1].service_url}>{item.title.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
