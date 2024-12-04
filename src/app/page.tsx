import React from "react";
import Navbar from "./components/navbar/navbar";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>
          <Link href={"/"}>
              <h1>Megha Samala</h1>
          </Link>
      </h1>
      <Navbar />
    </div>
  );
};
