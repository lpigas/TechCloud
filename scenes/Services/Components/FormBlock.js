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
    <div className="flex mx-auto sm:max-w-60vw sm:min-h-full lg:min-w-full justify-center mt-[87px] flex-wrap">
      {data &&
        data.map((item) => (
          <div key={item._id} className={``}>
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
