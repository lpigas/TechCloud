import React, { useEffect, useState } from "react";
import CartPage from "../scenes/Cart/CartPage";
import Layout from "../components/layout/Layout";
import TitleBlock from "../scenes/Services/Components/TitleBlock";

export default function cart() {
  const [nextStage, setNextStage] = useState();
  const [partname, setPartname] = useState([
    {
      service_url: "/cart",
      service_name: "Корзина",
    },
  ]);
  return (
    <Layout title="Cart">
      <TitleBlock partname={partname} nextStage={nextStage} />
      <CartPage nextStage={nextStage} setNextStage={setNextStage} />
    </Layout>
  );
}
