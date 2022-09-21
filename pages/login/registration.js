import React, { useEffect, useState } from "react";
import Header from "../../components/layout/conponents/header/Header";
import Footer from "../../components/layout/conponents/footer/Footer";
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
    setOpenLoader(true);
    try {
      const data = await fetch(`/api/registration`, {
        method: "POST",
        body: JSON.stringify({ newUser: newUser }),
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
    <Layout
    title={'Registration'}
    >
      <TitleBlock
        partname={[
          {
            service_url: "/registration",
            service_name: "Регистрация нового пользователя",
          },
        ]}
      />
        <div className="w-8/12 max-w-full mb-10 m-auto bg-green-600">
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
