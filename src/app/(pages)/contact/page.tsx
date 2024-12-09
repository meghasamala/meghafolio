import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/app/components/contactform/contactForm";
import styles from "./contact.module.css"

const Contact = () => {

    return (
        <main className={styles.contact}>
            <div className={styles.bigDiv}>
                <div className={styles.topDiv}>
                    <div className={styles.titleBox}>
                        <h2>Contact</h2>
                    </div>
                    <p>You can contact me by sending a message here:</p>
                </div>

                <div className={styles.formTotal}>
                    {/* <div className={styles.formTitleBox}>
                        <h3>Message</h3>
                    </div> */}
                    <ContactForm />
                    <p>You can learn more about my work/projects by clicking the links below:</p>
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
                </div>
            </div>
        </main>
    )
}

export default Contact;