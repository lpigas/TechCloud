import { useRouter } from "next/router";
import React, { useState } from "react";
import ServicesForms from "../../../components/moleculs/Forms/ServicesForms";

export default function FormBlock({ data }) {
  const router = useRouter();

  const changePage = (item) => {
    if (typeof window !== "undefined") {
      const data = window.localStorage.setItem(
        "InfoData",
        JSON.stringify(item)
      );
    }
    router.push("/services/servicesInfo");
  };

  return (
    <div className="w-[1212px] flex ml-[368px]  mt-[87px] flex-wrap">
      {data &&
        data.map((item) => (
          <div key={item._id} className={` top-[378px] left-[368px]`}>
            <ServicesForms
              title={item.services.title.name}
              color={item.services.title.Roundblur.color}
              imageRound={item.services.title.Roundblur.img}
              bigImage={item.services.title.photoUrl}
              onClick={changePage}
              data={item}
            />
          </div>
        ))}
    </div>
  );
}
