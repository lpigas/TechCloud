import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../../components/atoms/Buttons/Button";
import jwt from "jsonwebtoken";
import StandartInput from "../../components/atoms/Input/StandartInput";
import Loader from "../../components/atoms/Loader/Loader";
import { useUser } from "@auth0/nextjs-auth0";
import Layout from "components/layout/Layout";
import TitleBlock from "components/moleculs/Title/TitleBlock";

export default function LoginBlock() {
  const partname=[
    {
      service_url: "/login",
      service_name: "Вход в личный кабинет",
    },
  ]
  const router = useRouter();
  const [message, setMessage] = useState();
  const [openLoader, setOpenLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const { user, error, isLoading } = useUser();
  if (error) return <div>{error.message}</div>;
  const userAuth = user && user[process.env.AUTH0_BASE_URL + "/user_metadata"];


  const getToken = async () => {
    try {
      const get = await fetch(`${process.env.API_HOST}login`, {
        method: "POST",
        body: JSON.stringify({ userAuth }),
      });
      const gets = await get.json();
      const token = gets.token;
      if (token) {
        const fullUserInfo = jwt.decode(token);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(
            "token",
            JSON.stringify(token)
          );
          if (fullUserInfo.cart.length > 0) {
            window.localStorage.setItem(
              "Cart",
              JSON.stringify(fullUserInfo.cart)
            );
          }
          fullUserInfo.role === "user" &&
            router.push(
              process.env.USER_PATH +`?user=${fullUserInfo.name}&page=personal`
            );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      setOpenLoader(true);
      getToken();
    }
  }, [user]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const resetpass = async () => {
    try {
      setEmail("");
      const data = await fetch(`${process.env.API_HOST}resetpass`, {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const datas = await data.json();
      setErrorMessage(datas.message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage();
        setEmail("");
      }, 3000);
    }
  },[errorMessage])

  return (
    <Layout>
      <TitleBlock partname={partname} />
      <div className=" md:w-8/12 max-w-full mb-10 m-auto">
    <div className="sm:w-full xl:w-1/2 flex bg-[#FFFFFF] justify-center rounded-[20px] xl:rounded-[50px]">
      {!message ? (
        openLoader || isLoading ? (
          <div className="p-8">
            Please wait loading ...
            <Loader />
          </div>
        ) : (
          <div className="w-full py-8 justify-center px-1 md:px-12 flex flex-col items-center">
            <div className="flex justify-center flex-col md:justify-start">
              <Button
                type={"static"}
                onClick={() => router.push(`${process.env.API_HOST}auth/login`)}
              >
                Войти
              </Button>
            </div>
            <div className="flex justify-center mt-[15px] flex-col md:justify-start">
              <Button
                type={"static"}
                onClick={() => router.push(`${process.env.API_HOST}invite`)}
              >
                Регистрация
              </Button>
            </div>
            <div className="mt-[33px] w-full h-full ">
              <div className="mt-[18px] mb-2">
                <div className="flex-col md:flex-row justify-center flex w-max-full my-[24px] items-center">
                  <div
                    className="font-normal not-italic text-[20px] leading-[23px] text-[#7166F9] cursor-pointer"
                    onClick={() => setMessage("reset pass")}
                  >
                    Я забыл пароль
                  </div>
                </div>
              </div>
            </div>
            {openLoader && (
              <div className="mt-2">
                <Loader />
              </div>
            )}
          </div>
        )
      ) : (
        <div className="p-8">
          <div>
            <StandartInput
              placeholder="Email"
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-8">
              <Button
                disabled={validateEmail(email) === null}
                onClick={() => resetpass()}
              >
                Reset password
              </Button>
            </div>
            <div className="mt-8">
              <Button onClick={() => setMessage()}>Back to login</Button>
            </div>
            <div className="mt-4">{errorMessage && errorMessage}</div>
          </div>
        </div>
      )}
    </div>
    </div>
    </Layout>
  );
}
