import React from "react";

export default function PhotoUl({ data }) {
  // console.log(data.photoUrl);
  return (
    <div className="mb-[55px] flex mt-[-60px]">
      <img src={data.photoUrl} alt={data.name} className={'max-w-xxs max-h-4'}/>
    </div>
  );
}
