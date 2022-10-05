import React, { useState } from "react";
import Product from "./product/Product";

export default function LeftBlock({ cartData, setCartData }) {
  const [focus, setFocus] = useState();

  return (
    <div className="bg-[#F9F9FC] w-full ser:w-3/5 flex ser:justify-end">
      <div className="ser:w-3/4 pb-4 ser:pl-2">
        <div className="ser:mt-[46px] flex">
          <p className="text-[16px] font-bold mr-8">1. Ваша корзина</p>2.
          Оформить заказ
        </div>
        <div className="mt-[34px]">
          {cartData.map((item, index) => (
            <Product
              data={item}
              key={item}
              setFocus={setFocus}
              focus={focus}
              cartData={cartData}
              index={index}
              setCartData={setCartData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
