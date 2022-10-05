import React from "react";
import Button from "../../../components/atoms/Buttons/Button/Button";

export default function RightBlock({ cartData, checkout }) {
  const totalsum = cartData.reduce((a, b) => a + b.price * b.pcs, 0);
  const dec = isNaN(totalsum % 1) ? "00" : (totalsum % 1).toFixed(2);

  return (
    <div className=" bg-[#F6F6FA] w-full ser:w-2/5 pb-[15px] ser:pb-[225px]">
      <div className="ser:w-1/2 ser:pl-2">
        <div className="ser:mt-[46px]"> Ваш заказ :</div>
        <div className="flex justify-between mt-[46px] font-normal not-italic text-[18px] text-[#3E3F50]">
          {" "}
          <div>Всего:</div>{" "}
          <div>
            {cartData.length} {cartData.length > 1 ? "товара" : "товар"}
          </div>
        </div>
        <div className="flex justify-between mt-[19px]  font-bold not-italic text-[18px] text-[#3E3F50]">
          {" "}
          <div>Сумма:</div> <div>{Math.floor(totalsum) + +dec} Грн.</div>
        </div>
        <div className="mt-[61px]">
          <Button type="static" onClick={checkout}>
            {" "}
            Оформить заказ{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
