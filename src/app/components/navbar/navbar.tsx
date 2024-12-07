import React from "react";
import Link from "next/link";
import navLinks from "../../models/navlinks.json";

const Navbar = () => {

    return (
            <nav>
                <div>
                    {/* https://nextjs.org/learn/dashboard-app/navigating-between-pages */}
                    {navLinks.map((link) => 
                        <Link key={link.name} href={link.path} replace>{link.name}</Link>
                    )}
                    <Link href={"/meghasResume3.pdf"} target="_blank" rel="noopener noreferrer">Resume</Link>
                </div>
            </nav>
    )
}

export default Navbar;