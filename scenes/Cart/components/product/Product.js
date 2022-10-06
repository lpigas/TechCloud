import React, { useEffect } from "react";
import PcsBlock from "./components/PcsBlock";
import { useState } from "react";
export default function Product({
  data,
  cartData,
  index,
  setCartData,
  setFocus,
  focus,
}) {
  const changeData = (index, newvalue) => {
    const newData = cartData;
    newData[index].pcs = newvalue;
    setCartData([...newData]);
    setFocus(index);
  };
  const dellProduct = () => {
    const newCart = cartData.filter((item) => item !== cartData[index]);
    setCartData(newCart);
    console.log(newCart);
  };

  return (
    <div className=" bg-white ser:w-11/12 max-w-full rounded-[10px] items-center ser:rounded-[30px] flex p-4 mt-[12px]">
      <div className="w-2/12">
        {" "}
        <img src={data.imgProduct} alt={data.nameProduct}></img>
      </div>
      <div className="w-4/12"> {data.nameProduct}</div>
      <div className="w-2/12 text-center ml-6">
        <PcsBlock
          data={data.pcs}
          index={index}
          changeData={changeData}
          focus={focus}
        />
      </div>
      <div className="w-3/12 text-center"> {data.price * data.pcs}</div>
      <div className="w-1/12 text-center" onClick={() => dellProduct()}>
        <img
          src="/image/Arrows/cancel1.png"
          className="w-[19px] h-[19px]"
        ></img>
      </div>
    </div>
  );
}
