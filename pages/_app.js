import "../styles/index.css";
import "tailwindcss/tailwind.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
