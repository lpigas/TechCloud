import React, { useEffect, useState } from "react";
import Empty from "./components/Empty";
import LeftBlock from "./components/LeftBlock";
import RightBlock from "./components/RightBlock";
import LeftBlockPersonal from "./components/LeftBlockPersonal";
import jwt from "jsonwebtoken";
import Thanks from "./components/Thanks/Thanks";

export default function CartPage({ setNextStage, nextStage }) {
  const [cartData, setCartData] = useState();

  const [errorMessage, setErrorMessage] = useState();
  const [user, setUser] = useState({
    urfis: "",
    name: "",
    sername: "",
    phone: "",
    email: "",
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
          sername: userdata.sername,
          urfis: userdata.urfis,
          phone: userdata.phone,
          email: userdata.email,
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
    setNextStage("stage2");
  };

  const addnewOrder = async () => {
    try {
      const data = await fetch(`${process.env.API_HOST}/neworder`, {
        method: "POST",
        body: JSON.stringify({ user, order: cartData }),
      });
      const datas = await data.json();
      console.log(datas.message);
      if (typeof window !== "undefined") {
        const data = window.localStorage.removeItem("Cart");
      }
      setNextStage(datas.message);
    } catch (error) {
      console.log(error);
    }
  };

  const agree = () => {
    const validateEmail = (email) => {
      return email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const validationEmail = validateEmail(user.email);
    if (user.phone.includes("__")) {
      return setErrorMessage("Phone wrong");
    } else if (user.name.length < 3 || user.sername.length < 3) {
      return setErrorMessage("Name or Sername wrong");
    }
    if (!validationEmail) {
      return setErrorMessage("Email wrong");
    }

    addnewOrder();
  };
  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage();
      }, 3000);
    }
  }, [errorMessage]);
  return (
    <div className="flex px-1 w-full">
      {!cartData ? (
        <Empty />
      ) : !nextStage ? (
        <div className="flex flex-col ser:flex-row px-1 w-full">
          <LeftBlock cartData={cartData} setCartData={setCartData} />
          <RightBlock cartData={cartData} checkout={checkout} />
        </div>
      ) : nextStage === "stage2" ? (
        <div className="flex flex-col ser:flex-row px-1 w-full">
          <LeftBlockPersonal
            user={user}
            errorMessage={errorMessage}
            setUser={setUser}
          />
          <RightBlock cartData={cartData} checkout={agree} />
        </div>
      ) : (
        nextStage === "ok" && <Thanks />
      )}
    </div>
  );
}
