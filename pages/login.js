import React, { useState } from "react";
import TitleBlock from "../scenes/Services/Components/TitleBlock";
import LoginBlock from "../scenes/Login/LoginBlock";
import Layout from "../components/layout/Layout";

export default function login() {
  const [viewPassword, setViewPassword] = useState("");
  const [enterLogin, setEnterLogin] = useState({ email: "", password: "" });

  return (
    <Layout minh={1462} title={"Login"}>
      <TitleBlock
        partname={[
          {
            service_url: "/login",
            service_name: "Вход в личный кабинет",
          },
        ]}
      />

      <div className="w-8/12 max-w-full mb-10 m-auto">
        <LoginBlock
          view={viewPassword}
          setView={setViewPassword}
          enterLogin={enterLogin}
          setEnterLogin={setEnterLogin}
        />
      </div>
    </Layout>
  );
}
