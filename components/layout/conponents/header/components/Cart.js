import React from "react";

export default function Cart({ cart }) {
  return (
    <div>
      <div className="w-[22px] h-[22px] rounded-full bg-[#FD7A55] leading-[24px] text-[12px] absolute top-[-6px] left-[34px]">
        <p className="flex justify-center font-bold text-white item-center">
          1
        </p>
      </div>
      <img src={"/image/cart.svg"} className="w-[36px] h-[36px] " />
    </div>
  );
}
