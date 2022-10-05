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
    <div className="flex mx-auto min-w-full ser:w-4/5 justify-center mt-[87px] flex-wrap ">
      {data &&
        data.map((item) => (
          <div
            key={Math.random()}
            className={`w-full ser:w-2/5 flex m-1 ser:m-4`}
          >
            {/* {console.log(item.title)} */}
            {item.title && (
              <ServicesForms
                title={item.title.name}
                color={item.title.Roundblur.color}
                imageRound={item.title.Roundblur.img}
                bigImage={item.title.servicePagePhotoUrl}
                onClick={changePage}
                data={item}
              />
            )}
          </div>
        ))}
    </div>
  );
}
