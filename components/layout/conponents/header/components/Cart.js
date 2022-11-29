import React from "react";

export default function Cart({ cart, onClick }) {
  return (
    <div className="flex w-[58px] cursor-pointer" onClick={onClick}>
      <img src={"/image/cart.svg"} className="min-w-[36px] min-h-[36px] " />
      {cart  && cart.length > 0 && (
        <div className="w-[22px] h-[22px] rounded-full bg-[#FD7A55] leading-[24px] text-[12px] ">
          <p className="flex justify-center font-bold text-white item-center">
            {cart.length}
          </p>
        </div>
      )}
    </div>
  );
}
