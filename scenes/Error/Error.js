import React from "react";
import ErrorBlock from "./Components/ErrorBlock";
import Layout from "../../components/layout/Layout";

export default function Error() {
  const partname = [{ service_name: "Упс! Страница не найдена" }];
  return (
    <Layout title={`404`}>
      <ErrorBlock partname={partname} />
    </Layout>
  );
}
