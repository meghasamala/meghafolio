import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <h2>
          <Link href={"/"}>
          <h1>Megha Samala</h1>
          </Link>
      </h2>
        <Navbar/>
        {children}
        <Footer/>
      </>
  );
}