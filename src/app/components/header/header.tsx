import React from "react";
import Link from "next/link";

const Header = () => {

    const links = [
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Projects",
            path: "/projects"
        },
        {
            name: "Resume",
            path: "/resume"
        },
        {
            name: "Now",
            path: "/now"
        },
        {
            name: "Favorites",
            path: "/favorites"
        },
        {
            name: "Travels",
            path: "/travels"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]

    return (
        <header>
            <nav>
                <h1>
                    <Link href={"/"}>
                        <h1>Megha Samala</h1>
                    </Link>
                </h1>
                <div>
                    {/* https://nextjs.org/learn/dashboard-app/navigating-between-pages */}
                    {links.map((link) => 
                        <Link key={link.name} href={link.path} replace>{link.name}</Link>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header;