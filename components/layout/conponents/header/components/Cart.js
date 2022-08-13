import React from "react";

export default function Cart({ cart }) {
  return (
    <div>
      <div className="w-[15px] h-[15px] rounded-full bg-[#FD7A55] leading-[24px] text-[12px] absolute top-[-6px] left-[19px]">
        <p className="text-center font-bold text-white absolute top-[-4px] left-1">
          1
        </p>
      </div>
      <img src={"/image/cart.svg"} className="w-[26px] h-[26px] " />
    </div>
  );
}
