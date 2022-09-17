import React, { useEffect } from "react";
import { useState } from "react";
import OrdersTable from "../../../../components/moleculs/Tables/OrdersTable";
import Titlerders from "../../../../components/atoms/Tables/Titlerders";
import Loader from "../../../../components/atoms/Loader/Loader";

export default function Orders({ email }) {
  const [openOrder, setOpenOrder] = useState();
  const [ordersData, setOrdersData] = useState();
  const repeatOrder = (product) => {
    if (typeof window !== "undefined") {
      const data = window.localStorage.setItem("Cart", JSON.stringify(product));
    }
  };
  const getOrders = async () => {
    try {
      const data = await fetch(`${process.env.API_HOST}orders`, {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const datas = await data.json();
      setOrdersData(datas.orders);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="bg-[#F9F9FC] w-full overflow-scroll">
      {!ordersData ? (
        <Loader />
      ) : (
        <div className="mt-[83px] ml-[128px] max-w-quote">
          <div className="font-bold not-italic text-[20px] leading-[28px] text-[#3E3F50]">
            История заказов:
          </div>
          <div className="mt-[56px]">
            <Titlerders />
          </div>
          <div className="mt-[11px]">
            {ordersData &&
              ordersData.map((item) => (
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
      )}
    </div>
  );
}
