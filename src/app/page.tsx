import React from "react";
import Navbar from "./components/navbar/navbar";
import Link from "next/link";


const Home = () => {
  return (
    <main className="landing-div">
      <h1>
          <Link href={"/"}>
              <h1>Megha Samala</h1>
          </Link>
      </h1>
      <Navbar />
    </main>
  );
};

export default Home;
