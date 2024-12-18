import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/app/components/contactform/contactForm";


const Contact = () => {

    return (
        <main className="m-0 p-0 flex-1 h-full flex justify-center">
            <div className="w-[450px] mb-[30px]">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                        <h2 className="bg-pink basis-[content] grow-0 shrink-0 mt-5 p-2.5 font-serif font-light">Contact</h2>
                    </div>
                </div>

                <div className="m-[5px]">
                    <ContactForm />
                    <p className="m-0 p-2.5">You can learn more about my work/projects by clicking the links below:</p>
                        {/* icons downloaded from icons8 website  */}
                        {/* https://icons8.com/icon/set/linkedin/glyph-neue */}
                        {/* https://icons8.com/icon/set/github/glyph-neue */}
                        
                    <Link href={"https://www.linkedin.com/in/meghasamala/"} target="_blank" className="text-[black] no-underline p-[5px] cursor-pointer">
                        <Image 
                        src={"/icons8-linkedin-64.png"}
                        width={64}
                        height={64} 
                        alt="LinkedIn icon"/>
                    </Link>
                    <Link href={"https://github.com/meghasamala"} target="_blank" className="text-[black] no-underline p-[5px] cursor-pointer">
                        <Image 
                        src={"/icons8-github-64.png"} 
                        width={64}
                        height={64} 
                        alt="Github icon"/>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Contact;