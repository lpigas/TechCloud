import React from "react";
import Footer from "./conponents/footer/Footer";
import Header from "./conponents/header/Header";

export default function Layout({ children, title }) {
  return (
    <div>
      <Header title={title} />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
