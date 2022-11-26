import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import TitleBlock from "../../components/moleculs/Title/TitleBlock";
import Side from "/scenes/Acount/components/Side";
import Personal from "/scenes/Acount/Personal";
import Orders from "/scenes/Acount/components/components/Orders/Orders";
import Tickets from "/scenes/Acount/components/components/Tickets/Tickets";
import Layout from "../../components/layout/Layout";
import { useUser } from "@auth0/nextjs-auth0";

export default function user() {
  const fullUserAuth = useUser().user;
  const verified =
    fullUserAuth &&
    (fullUserAuth.email_verified || fullUserAuth.sub.includes("googl"));

  const [highlighted, setHighlighted] = useState("personal");
  const router = useRouter();
  const [user, setUser] = useState();
  const [changePassword, setChangePassword] = useState({
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
        surname: userdata.surname,
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

  useEffect(() => {
    if (router.query) {
      setHighlighted(router.query.page);
    }
  }, [router]);






  return (
    <>
      {user && (
        <Layout title={user && user.name}>
          <TitleBlock partname={partname} />
          <div className="flex flex-col lg:flex-row mt-[79px] lg:w-11/12 max-w-full m-auto  p-1">
            <Side
              user={user}
              highlighted={highlighted}
              setHighlighted={setHighlighted}
            />
            {highlighted === "personal" ? (
              <Personal
                user={user}
                setUser={setUser}
                changePassword={changePassword}
                setChangePassword={setChangePassword}
                sub={fullUserAuth && fullUserAuth.sub}
              />
            ) : highlighted === "orders" ? (
              !verified ? (
                <div className="flex items-center m-auto text-red-500">
                  {" "}
                  Your account not verified, please go to your email and verify{" "}
                </div>
              ) : (
                <Orders email={user.email} />
              )
            ) : !verified ? (
              <div className="flex items-center m-auto text-red-500">
                {" "}
                Your account not verified, please go to your email and verify{" "}
              </div>
            ) : (
              <Tickets
                email={user.email}
                role={`${user.name} ${user.surname}`}
              />
            )}
          </div>
        </Layout>
      )}
    </>
  );
}
