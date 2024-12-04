import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <>
            <h2>Contact Me</h2>
            <p>You can contact me at <Link href={"mailto:msamala@bu.edu"}>msamala@bu.edu</Link>.</p>
            <p>You can also learn more about my work/projects by clicking the links below:</p>
                {/* icons downloaded from icons8 website  */}
                {/* https://icons8.com/icon/set/linkedin/glyph-neue */}
                {/* https://icons8.com/icon/set/github/glyph-neue */}
                
            <Link href={"https://www.linkedin.com/in/meghasamala/"} target="_blank">
                <Image 
                src={"/icons8-linkedin-64.png"}
                width={64}
                height={64} 
                alt="LinkedIn icon"/>
            </Link>
            <Link href={"https://github.com/meghasamala"} target="_blank">
                <Image 
                src={"/icons8-github-64.png"} 
                width={64}
                height={64} 
                alt="Github icon"/>
            </Link>
        </>
    )
}