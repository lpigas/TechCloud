import React, { useEffect } from "react";
import PcsBlock from "./components/PcsBlock";

export default function Product({
  oneProduct,
  cartData,
  index,
  setCartData,
  setFocus,
  focus,
  email,
}) {
  const changeCartData = (index, newvalue) => {
    const newCartData = cartData;
    newCartData[index].pcs = newvalue;
    setCartData([...newCartData]);
    if (typeof window !== "undefined") {
      const data = window.localStorage.setItem("Cart", JSON.stringify(newCartData));
    }
    setFocus(index);
    console.log(cartData)
  };
  const dellProductCart = () => {
    const newCart = cartData.filter((item) => item !== cartData[index]);
    setCartData(newCart);
    if (typeof window !== "undefined") {
      const data = window.localStorage.setItem("Cart", JSON.stringify(newCart));
    }
  };

  const addCartdb = async () => {
    let cart;
    if (typeof window !== "undefined") {
      cart = JSON.parse(window.localStorage.getItem("Cart"));
      
    }
    if (cart) {
      try {
        const data = await fetch(`${process.env.API_HOST}addcartdb`, {
          method: "POST",
          body: JSON.stringify({ email: email, cart: cartData }),
        });
        const datas = await data.json();
        console.log(datas.message);
      } catch (error) {}
    }
  };
  useEffect(() => {
    addCartdb();
  }, []);

  return (
    <div className=" bg-white ser:w-11/12 max-w-full rounded-[10px] items-center ser:rounded-[30px] flex p-4 mt-[12px]">
      <div className="w-2/12">
        {" "}
        <img src={oneProduct.imgProduct} alt={oneProduct.nameProduct}></img>
      </div>
      <div className="w-4/12"> {oneProduct.nameProduct}</div>
      <div className="w-2/12 text-center ml-6">
        <PcsBlock
          productPcs={oneProduct.pcs}
          index={index}
          changeCartData={changeCartData}
          focus={focus}
        />
      </div>
      <div className="w-3/12 text-center"> {oneProduct.price * oneProduct.pcs}</div>
      <div className="w-1/12 text-center" onClick={() => dellProductCart()}>
        <img
          src="/image/Arrows/cancel1.png"
          className="w-[19px] h-[19px]"
        ></img>
      </div>
    </div>
  );
}
