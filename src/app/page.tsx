import React from "react";
import Navbar from "./components/navbar/navbar";
import Link from "next/link";


const Home = () => {
  return (
    <main className="h-full flex-1 flex items-center justify-center flex-col m-2.5">
      <h1 className="m-0">
          <Link href={"/"} className="text-[black] no-underline p-[5px]">
              <h1 className="font-serif font-light m-0 p-0 max-[640px]:text-[1.7em] ">Megha Samala</h1>
          </Link>
      </h1>
      <Navbar />
    </main>
  );
};

export default Home;
