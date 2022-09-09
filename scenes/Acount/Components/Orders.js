import React from "react";
import { useState } from "react";
import OrdersTable from "../../../components/moleculs/Tables/OrdersTable";
import Titlerders from "../../../components/atoms/Tables/Titlerders";

export default function Orders({ ordersData }) {
  const [openOrder, setOpenOrder] = useState();
  const repeatOrder = (product) => {
    if (typeof window !== "undefined") {
      const data = window.localStorage.setItem("Cart", JSON.stringify(product));
    }
  };
  return (
    <div className="bg-[#F9F9FC] w-full overflow-scroll">
      <div className="mt-[83px] ml-[128px] w-[781px] h-[788px]">
        <div className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50]">
          История заказов:
        </div>
        <div className="mt-[56px]">
          <Titlerders />
        </div>
        <div className="mt-[11px]">
          {ordersData.map((item) => (
            <OrdersTable
              key={Math.random()}
              openOrder={openOrder}
              setOpenOrder={setOpenOrder}
              allOrderdata={item}
              onClick={repeatOrder}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
