import React, { useState } from "react";
import Header from "../../components/layout/conponents/header/Header";
import Footer from "../../components/layout/conponents/footer/Footer";
import TitleBlock from "../../scenes/Services/Components/TitleBlock";

import RegistrationBlock from "../../scenes/Login/RegistrationBlock";

export default function registration() {
  const [viewPassword, setViewPassword] = useState("");
  const [newUser, setNewUser] = useState({
    login: "",
    password: "",
    name: "",
    sername: "",
    phone: "",
    email: "",
    country: "",
    city: "",
  });
  return (
    <>
      <div className="w-[1920px] min-h-[1462px]">
        <div
          id="Rectangle1"
          style={{
            background: "linear-gradient(90deg, #F6F8FC 0%, #ECF0FA 100%)",
          }}
          className="-[1920px] min-h-[1080px] from-[#90deg, #F6F8FC_0%, #ECF0FA_100%]"
        >
          <Header title={"Login"} />
          <div id="home__title" className="flex  w-[983px] h-[246px]">
            <TitleBlock
              partname={[
                {
                  service_url: "/registration",
                  service_name: "Регистрация нового пользователя",
                },
              ]}
            />
          </div>
          <div className="mt-[76px] ml-[368px] pb-[118px]">
            <RegistrationBlock
              view={viewPassword}
              setView={setViewPassword}
              newUser={newUser}
              setNewUser={setNewUser}
            />
          </div>
        </div>
        <div id="home__footer" className={` w-[1187px] h-[347px] m-auto`}>
          <Footer />
        </div>
      </div>
    </>
  );
}
