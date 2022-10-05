import React from "react";

export default function PhotoUl({ data }) {
  // console.log(data.photoUrl);
  return (
    <div className="mb-[55px] flex mt-[-20px]">
      <img
        src={data.homePagePhotoUrl}
        alt={data.name}
        className={"w-full max-w-[300px] "}
      />
    </div>
  );
}
