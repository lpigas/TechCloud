import React from "react";
import TitleBlock from "./Components/TitleBlock";
import Layout from "../../components/layout/Layout";

export default function Error() {
  const partname = [{ service_name: "Упс! Страница не найдена" }];
  return (
    <Layout minh={1261} title={`404`}>
      <TitleBlock partname={partname} />
    </Layout>
  );
}
