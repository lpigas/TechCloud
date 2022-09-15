import React from "react";

export default function PhotoUl({ data }) {
  // console.log(data.photoUrl);
  return (
    <div className="mb-[55px] flex mt-[-50px]">
      <img src={data.photoUrl} alt={data.name} width={579} height={355} />
    </div>
  );
}
