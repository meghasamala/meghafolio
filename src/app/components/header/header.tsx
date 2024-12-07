import React from "react";
import Navbar from "../navbar/navbar";
import Link from "next/link";

const Header = () => {

    return (
        <header>
            <Link href={"/"}>
              <h1>Megha Samala</h1>
            </Link>
            <Navbar/>
        </header>
    )

}

export default Header;