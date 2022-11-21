import React, { useEffect, useState } from "react";
import Thanks from "scenes/Cart/components/Thanks/Thanks";
import { useUser } from "@auth0/nextjs-auth0";
import Layout from "../../../components/layout/Layout";
import Loader from "components/atoms/Loader/Loader";
import TitleBlock from "../../../components/moleculs/Title/TitleBlock";
import { useRouter } from "next/router";

export default function compleate() {
  const [userName, setUserName] = useState();
  const [loader, setLoader] = useState();
  const [token, setToken] = useState();
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const partname=[
    {
      service_url: "/cart?page=product",
      service_name: "Корзина",
    },
  ];

  const userVerification = async (user) => {
    try {
      const data = await fetch(`${process.env.API_HOST}userVerification`, {
        method: "POST",
        body: JSON.stringify({ user: user }),
      });
      const parser = await data.json();
      const newToken = parser.message;
      if (parser.error) {
        console.log(parser);
        router.push(`/cart?page=product`);
      }
      if (newToken) {
        setToken(newToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isLoading && !user) {
      const userFromLocal = JSON.parse(window.localStorage.getItem("user"));
      setUserName(userFromLocal.name);
      userVerification(userFromLocal);
    } else if (!isLoading && user) {
      
      const userFromAuth = user[process.env.AUTH0_BASE_URL + "/user_metadata"] || user[process.env.DEV_URL + "/user_metadata"];
      setUserName(userFromAuth);
      userVerification(userFromAuth);
    }
  }, [user, isLoading]);
  useEffect(() => {
    if (token) {
      console.log("if token");
      window.localStorage.setItem("token", JSON.stringify(token));
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("Cart");
      setLoader(true);
      setTimeout(() => {
        router.push(`${process.env.USER_PATH}?user=${userName}&page=orders`);
      }, 3000);
    }
  }, [token]);

  return (
    <Layout title="Cart">
      <TitleBlock partname={partname} />
      {!loader ? (
        <div className="flex flex-col items-center">
          <Loader />
          <p className="p-6">Please wait Payment ....</p>
        </div>
      ) : (
        <Thanks />
      )}
    </Layout>
  );
}
