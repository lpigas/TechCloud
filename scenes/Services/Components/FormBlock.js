import React, { useState } from "react";
import ServicesForms from "../../../components/moleculs/Forms/ServicesForms";

export default function FormBlock({ data }) {
  return (
    <div className="flex mx-auto min-w-full ser:w-4/5 justify-center mt-[87px] flex-wrap ">
      {data &&
        data.map((item) => (
          <div
            key={item.title.name}
            className={`w-full ser:w-2/5 flex m-1 ser:m-4`}
          >
            {item.title && (
              <ServicesForms
                title={item.title.name}
                color={item.title.Roundblur.color}
                imageRound={item.title.Roundblur.img}
                bigImage={item.title.servicePagePhotoUrl}
                data={item}
              />
            )}
          </div>
        ))}
    </div>
  );
}
