import React from "react";
import { useRouter } from "next/router";
const AllServices = require("../../../constants/About/dataul.json");
import CloudServerPage from "scenes/Services/CloudServer/CloudServerPage";
import Layout from "components/layout/Layout";

export default function id() {
  const router = useRouter();
  const { id } = router.query;
  const serviceInfo = AllServices.services.filter((item) => item.id === id);
  return (
    <Layout>
      {serviceInfo.length > 0 && (
        <CloudServerPage serviceInfo={serviceInfo[0]} />
      )}
    </Layout>
  );
}
