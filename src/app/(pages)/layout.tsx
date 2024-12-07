import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

// import { Fraunces } from 'next/font/google';

// const fraunces = Fraunces({
//   weight: "700",
//   subsets: ['latin']
// })

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Header/>
        {children}
        <Footer/>
      </>
  );
}