import React from "react";
import Link from "next/link";
import navLinks from "../../models/navlinks.json";

const Navbar = () => {

    return (
            <nav>
                <div>
                    {/* https://nextjs.org/learn/dashboard-app/navigating-between-pages */}
                    {navLinks.map((link) => 
                        <Link key={link.name} href={link.path} className="text-[black] no-underline p-[5px] bg-green m-[5px] hover:bg-pink cursor-pointer" replace>{link.name}</Link>
                    )}
                    <Link href={"/MeghaResume0425.pdf"} target="_blank" className="text-[black] no-underline p-[5px] bg-green m-[5px] hover:bg-pink cursor-pointer" rel="noopener noreferrer">Resume</Link>
                </div>
            </nav>
    )
}

export default Navbar;