import React from "react";
import TitleBlock from "./components/TitleBlock";
import Main from "./components/main/Main";
import Center from "./components/center/Center";
import Layout from "../../components/layout/Layout";

export default function Aboute({}) {
  const conponent = (
    <div className="w-full">
      <Center />{" "}
    </div>
  );
  return (
    <Layout minh={1500} title="Home" component={conponent}>
      <TitleBlock />
      <Main />
    </Layout>
  );
}
