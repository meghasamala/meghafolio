import React from "react";
import Navbar from "../navbar/navbar";
import Link from "next/link";

const Header = () => {

    return (
        <header className="flex justify-between items-center px-[15px] max-[640px]:flex-wrap max-[640px]:flex-col max-[640px]:justify-center max-[640px]:mb-5 max-[1024px]:flex-wrap max-[1024px]:flex-col max-[1024px]:justify-center max-[1024px]:mb-5">
            <Link href={"/"} className="text-[black] no-underline p-[5px] m-0">
              <h1 className="font-serif font-light m-[12px] p-0 max-[640px]:text-[1.7em] ">Megha Samala</h1>
            </Link>
            <Navbar/>
        </header>
    )

}

export default Header;