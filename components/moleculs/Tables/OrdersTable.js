import React from "react";
import Button from "../../atoms/Buttons/Button";
export default function OrdersTable({
  openOrder,
  setOpenOrder,
  allOrderdata,
  onClick,
}) {
  const totalpcs = allOrderdata.products.reduce((a, b) => a + b.pcs, 0);
  const totalsum = allOrderdata.products.reduce(
    (a, b) => a + b.pcs * b.price,
    0
  );

  return (
    <table
      onClick={() => !openOrder && setOpenOrder(allOrderdata.numOrder)}
      className="w-full break-all bg-[#FFFFFF] mt-[12px] mb-[21px] rounded-[10px] ser:rounded-[30px]  "
    >
      <tbody className="w-full ">
        <tr className="w-full ">
          <td className="lg:pl-[33px] flex flex-row py-8 w-4/5 font-bold not-italic text-[16px] leading-[28px] text-[#3E3F50]">
            {allOrderdata.numOrder.slice(0, 8)}
          </td>
          <td className="w-2/12 font-normal not-italic text-[16px] leading-[28px] text-[#3E3F50] ">
            {allOrderdata.date}
          </td>
          <td className="w-3/12 font-normal not-italic text-[16px] leading-[28px] text-[#3E3F50]">
            {allOrderdata.products.length}
          </td>
          <td className="w-2/12 font-normal not-italic text-[16px] leading-[28px] text-[#3E3F50]">
            {totalsum} Грн.
          </td>
          <td className="w-2/12 ">
            {allOrderdata.status === "ok" ? (
              <a
                className={`flex not-italic text-[16px] leading-[28px] text-[#3DCAA8]`}
              >
                Оплачен
                {openOrder === allOrderdata.numOrder ? (
                  <img
                    className="m-auto hidden lg:flex"
                    src="/image/Arrows/arrowup.svg"
                    width={16}
                    height={28}
                    onClick={() => setOpenOrder()}
                  />
                ) : (
                  <img
                    className="m-auto hidden lg:flex"
                    src="/image/Arrows/arrowdown.svg"
                    width={16}
                    height={28}
                    onClick={() => setOpenOrder(allOrderdata.numOrder)}
                  />
                )}
              </a>
            ) : allOrderdata.status === "wait" ? (
              <a
                className={`flex not-italic text-[16px] leading-[28px] text-[#FD5555]`}
              >
                Не оплачен
                {openOrder === allOrderdata.numOrder ? (
                  <img
                    className="m-auto hidden lg:flex"
                    src="/image/Arrows/arrowup.svg"
                    width={16}
                    height={28}
                    onClick={() => setOpenOrder()}
                  />
                ) : (
                  <img
                    className="m-auto hidden lg:flex"
                    src="/image/Arrows/arrowdown.svg"
                    width={16}
                    height={28}
                    onClick={() => setOpenOrder(allOrderdata.numOrder)}
                  />
                )}
              </a>
            ) : (
              <a
                className={`flex not-italic text-[16px] leading-[28px] text-[#616E87]`}
              >
                Отменен
                {openOrder === allOrderdata.numOrder ? (
                  <img
                    className="m-auto hidden lg:flex"
                    src="/image/Arrows/arrowup.svg"
                    width={16}
                    height={28}
                    onClick={() => setOpenOrder()}
                  />
                ) : (
                  <img
                    className="m-auto hidden lg:flex"
                    src="/image/Arrows/arrowdown.svg"
                    width={16}
                    height={28}
                    onClick={() => setOpenOrder(allOrderdata.numOrder)}
                  />
                )}
              </a>
            )}
          </td>
        </tr>
        {openOrder === allOrderdata.numOrder && (
          <>
            {allOrderdata.products.map((item) => (
              <tr key={item.nameProduct}>
                <td colSpan={5} className="">
                  <table className="w-full ">
                    <tbody>
                      <tr>
                        <td className="w-2/12">
                          <img src={item.imgProduct} width={65} height={80} />
                        </td>
                        <td className="w-5/12">{item.nameProduct}</td>
                        <td className="w-2/12 text-right">{item.pcs} pcs.</td>
                        <td className="w-3/12 text-right">{item.price} Грн.</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
            <tr className="mt-[138px] backdrop:before:font-normal not-italic text-[18px] leading-[28px] text-[#3E3F50]">
              <td> </td>
              <td> </td>
              <td> </td>
              <td> Всего:</td>
              <td className="text-center"> {totalpcs} товаров</td>
            </tr>
            <tr className="mt-[19px] font-bold not-italic text-[18px] leading-[28px] text-[#3E3F50]">
              <td className="mt-10"> </td>
              <td> </td>
              <td> </td>
              <td> Сумма:</td>
              <td className="text-center mp-10">{totalsum} грн.</td>
            </tr>
            <tr className="">
              <td colSpan={6}>
                <a className="flex py-12 justify-end pr-[31px]">
                  <Button
                    type={"static"}
                    onClick={() => onClick(allOrderdata.products)}
                  >
                    {" "}
                    Повторить заказ
                  </Button>
                </a>
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
}
