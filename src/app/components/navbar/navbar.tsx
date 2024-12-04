import React from "react";
import Link from "next/link";
import navLinks from "../../models/navlinks.json";

const Navbar = () => {

    return (
        <header>
            <nav>
                <div>
                    {/* https://nextjs.org/learn/dashboard-app/navigating-between-pages */}
                    {navLinks.map((link) => 
                        <Link key={link.name} href={link.path} replace>{link.name}</Link>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;