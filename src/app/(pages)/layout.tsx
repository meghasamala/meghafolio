import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Header></Header>
        {children}
        <Footer></Footer>
      </>
  );
}