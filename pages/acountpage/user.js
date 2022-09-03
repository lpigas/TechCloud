import Header from "../../components/layout/conponents/header/Header";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import TitleBlock from "../../scenes/Services/Components/TitleBlock";
import Side from "../../scenes/Acount/Side";
import Personal from "../../scenes/Acount/Components/Personal";
import Orders from "../../scenes/Acount/Components/Orders";
import Tickets from "../../scenes/Acount/Components/Tickets";

export default function user() {
  const [highlighted, setHighlighted] = useState("Персональная информация");
  const router = useRouter();
  const [user, setUser] = useState();
  const [changePassword, setChangePassword] = useState({
    old: "",
    newpass: "",
    secondNewpass: "",
  });

  const partname = [{ service_name: "Личный кабинет", service_url: "" }];
  const getTokendata = () => {
    if (typeof window !== "undefined") {
      const token = JSON.parse(window.localStorage.getItem("token"));
      if (!token) {
        return router.push("/");
      }

      const userdata = jwt.decode(token);
      setUser({
        name: userdata.name,
        sername: userdata.sername,
        urfis: userdata.urfis,
        phone: userdata.phone,
        email: userdata.email,
        balance: userdata.balance,
        country: userdata.country,
        city: userdata.city,
        token: userdata.token,
        orders: userdata.orders,
        tickets: userdata.tickets,
      });
    }
  };

  useEffect(() => {
    getTokendata();
  }, []);

  return (
    <div className="min-h-[2388px] w-[1920px]">
      <div
        className="min-h-[1956px] w-[1920px]"
        style={{
          background: "linear-gradient(90deg, #F6F8FC 0%, #ECF0FA 100%)",
        }}
      >
        {user && (
          <>
            <Header title={user.name} />
            <TitleBlock partname={partname} />
            <div className="flex mt-[79px] min-h-[1591px]">
              <Side
                user={user}
                highlighted={highlighted}
                setHighlighted={setHighlighted}
              />
              {highlighted === "Персональная информация" ? (
                <Personal
                  user={user}
                  setUser={setUser}
                  changePassword={changePassword}
                  setChangePassword={setChangePassword}
                />
              ) : highlighted === "История заказов" ? (
                <Orders />
              ) : (
                <Tickets />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
