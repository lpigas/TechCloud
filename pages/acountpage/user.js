import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import TitleBlock from "../../scenes/Services/Components/TitleBlock";
import Side from "../../scenes/Acount/Components/Side";
import Personal from "../../scenes/Acount/Personal";
import Orders from "../../scenes/Acount/Components/Orders/Orders";
import Tickets from "../../scenes/Acount/Components/Tickets/Tickets";
import Layout from "../../components/layout/Layout";

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
      });
    }
  };

  


  useEffect(() => {
    getTokendata();
  }, []);

  return (
    <>
      {user && (
        <Layout title={user && user.name}>
          <TitleBlock partname={partname} />
          <div className="flex mt-[79px] min-h-[591px]">
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
              <Orders email={user.email} />
            ) : (
              <Tickets
                email={user.email}
                role={`${user.name} ${user.sername}`}
              />
            )}
          </div>
        </Layout>
      )}
    </>
  );
}
