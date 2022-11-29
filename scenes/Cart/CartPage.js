import React, { useEffect, useState } from "react";
import Empty from "./components/Empty";
import LeftBlock from "./components/LeftBlock";
import RightBlock from "./components/RightBlock";
import LeftBlockPersonal from "./components/LeftBlockPersonal";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import Loader from "components/atoms/Loader/Loader";
import Layout from "components/layout/Layout";
import TitleBlock from "components/moleculs/Title/TitleBlock";

export default function CartPage() {
  const partname = [
    {
      service_url: "/cart?page=product",
      service_name: "Корзина",
    },
  ];
  const [cartData, setCartData] = useState();
  const router = useRouter();
  const [nextStage, setNextStage] = useState(router);
  const [errorMessage, setErrorMessage] = useState();
  const [user, setUser] = useState({
    urfis: "",
    name: "",
    surname: "",
    phone: "",
    email: "",
    ordersLength: 0,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = JSON.parse(window.localStorage.getItem("Cart"));
      setCartData(cart);
    }
    if (typeof window !== "undefined") {
      const token = JSON.parse(window.localStorage.getItem("token"));
      const userdata = token && jwt.decode(token);
      userdata &&
        setUser({
          name: userdata.name,
          surname: userdata.surname,
          urfis: userdata.urfis,
          phone: userdata.phone,
          email: userdata.email,
          ordersLength: userdata.orders.length,
        });
    }
  }, []);
  const checkout = () => {
    if (typeof window !== "undefined") {
      const data = window.localStorage.setItem(
        "Cart",
        JSON.stringify(cartData)
      );
    }
    router.push("/cart?page=payment");
  };
  useEffect(() => {
    setNextStage(router.query && router.query.page);
  }, [router]);

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage();
      }, 3000);
    }
  }, [errorMessage]);


  useEffect(()=>{
    const filtred = 1
  },[cartData])


  return (
    <Layout cartData={cartData}>
      <TitleBlock partname={partname} />
      <div className="flex px-1 w-full">
        {!cartData || cartData.length < 1 ? (
          <Empty />
        ) : nextStage === "product" ? (
          <div className="flex flex-col ser:flex-row px-1 w-full">
            <LeftBlock
              cartData={cartData}
              setCartData={setCartData}
              email={user.email}
            />
            <RightBlock cartData={cartData} checkout={checkout} />
          </div>
        ) : nextStage === "payment" ? (
          <div className="flex flex-col ser:flex-row px-1 w-full">
            <LeftBlockPersonal
              user={user}
              errorMessage={errorMessage}
              setUser={setUser}
            />
            <RightBlock cartData={cartData} nextStage={nextStage} user={user} />
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </Layout>
  );
}
