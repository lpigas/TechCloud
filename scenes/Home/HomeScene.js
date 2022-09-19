import React from "react";
import TitleBlock from "./components/TitleBlock";
import Main from "./components/main/Main";
import Center from "./components/center/Center";
import Layout from "../../components/layout/Layout";

export default function Aboute({}) {
  const x = 1
  const conponent = (
    <div className="w-full">
      <Center />{" "}
    </div>
  );
  return (
    <Layout title="Home" component={conponent}>
      <TitleBlock />
      <div className="pb-14">
        <Main />
      </div>
    </Layout>
  );
}
