import React, { useState, useEffect } from "react";
import Button from "../../../components/atoms/Buttons/Button";
import LiqPayPay from "components/atoms/Liqpay/Liqpay";
import { validemail } from "util/validemail";

export default function RightBlock({ cartData, checkout, nextStage, user }) {
  const totalSum = cartData.reduce((a, b) => a + b.price * b.pcs, 0);
  const dec = isNaN(totalSum % 1) ? "00" : (totalSum % 1).toFixed(2);
  const [message, setMessage] = useState();
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  let numOrder = String(user && user.ordersLength);

  if (numOrder) {
    for (let i = numOrder.length; i <= 6; i++) {
      numOrder = "0" + numOrder;
    }
    numOrder = "#" + numOrder + "/" + (user && user.name);
  }
  const orderInfo = user && { userInfo: user, product: cartData };
  
  const validEnterData =() =>{
    if (user) {
      if (user.name.length < 3) {
        window.localStorage.removeItem("user");
        setButtonIsDisabled(true);
        setMessage("Name must be 3 letters or more");
      }
      if (!validemail(user.email)) {
        window.localStorage.removeItem("user");
        setButtonIsDisabled(true);
        setMessage("Email wrong");
      }
      if (validemail(user.email) && user.name.length >= 3) {
        window.localStorage.setItem("user", JSON.stringify(user));
        setMessage();
        setButtonIsDisabled(false);
      }
    }
  }

  useEffect(() => {
    validEnterData()
  }, [user]);
  
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
          <div>Сумма:</div> <div>{Math.floor(totalSum) + +dec} Грн.</div>
        </div>
        <div className="mt-[61px]">
          <div>{message}</div>
          {!nextStage && (
            <Button type="static" onClick={checkout}>
              {" "}
              Оформить заказ{" "}
            </Button>
          )}
          {nextStage === "payment" && (
            <LiqPayPay
              publicKey={process.env.PRIVAT_PUBLIC_KEY}
              privateKey={process.env.PRIVAT_PRIVATE_KEY}
              amount={`${totalSum}`}
              currency={"UAH"}
              description={cartData}
              orderId={numOrder}
              title={"Payment"}
              disabled={buttonIsDisabled}
              product={cartData}
              language={'ua'}
              info={JSON.stringify(orderInfo)}
              result_url={`https://tech-cloud.vercel.app/cart/compleate`}
              // добавить рендер на страницу сенкс и чистка локал сторедж карт запрос в бд и создание нового токена
              server_url={`https://tech-cloud.vercel.app/api/liqpayPayment`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
