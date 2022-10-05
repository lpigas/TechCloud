import React, { useEffect, useState } from "react";
const md5 = require("md5");
import TitleBlock from "../../scenes/Services/Components/TitleBlock";
import RegistrationBlock from "../../scenes/Registration/RegistrationBlock";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";

export default function registration() {
  const router = useRouter();
  const [viewPassword, setViewPassword] = useState("");
  const [messageError, setMessageError] = useState();
  const [openLoader, setOpenLoader] = useState(false);
  const [newUser, setNewUser] = useState({
    password: "",
    name: "",
    sername: "",
    phone: "",
    email: "",
    country: "",
    city: "",
  });
  const registerNewUser = async () => {
    if (newUser.password.length < 8) {
      return setMessageError(
        "Установите пожалуйста пароƒль 8 или более символов"
      );
    }
    if (newUser.password.search(/[A-Z]/) < 0) {
      return setMessageError(
        "Ваш пароль должен содержать хотя бы одну заглавную букву"
      );
    }
    if (newUser.password.search(/[0-9]/) < 0) {
      return setMessageError("Ваш пароль должен содержать хотя бы одну цифру");
    }
    setOpenLoader(true);
    const password = md5(newUser.password + process.env.SECRET_KEY);
    try {
      const data = await fetch(`/api/registration`, {
        method: "POST",
        body: JSON.stringify({ newUser: { ...newUser, password } }),
      });
      const datas = await data.json();
      datas.message !== "ok" && setMessageError(datas.message);
      datas.message === "ok" && router.push("/login");
    } catch (error) {}
    setOpenLoader(false);
  };
  useEffect(() => {
    if (messageError) {
      setTimeout(() => {
        setMessageError();
      }, 5000);
    }
  }, [messageError]);

  return (
    <Layout title={"Registration"}>
      <TitleBlock
        partname={[
          {
            service_url: "/login/registration",
            service_name: "Регистрация нового пользователя",
          },
        ]}
      />
      <div className="md:w-8/12 max-w-full mb-10 m-auto">
        <RegistrationBlock
          view={viewPassword}
          setView={setViewPassword}
          newUser={newUser}
          setNewUser={setNewUser}
          messageError={messageError}
          registerNewUser={registerNewUser}
          openLoader={openLoader}
        />
      </div>
    </Layout>
  );
}
