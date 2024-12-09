import React from "react";
// import Form from "next/form";
import Button from "../button/button";
import styles from "../../(pages)/contact/contact.module.css"

const ContactForm = () => {
    return (
        <div className={styles.formDiv}>
            <form className={styles.form} method="POST" action="/successMessage" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
                <div className={styles.formFields}>
                    <label htmlFor="name">Name:</label><br/>
                    <input type="text" id="name" name="name" required /><br/>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="email" name="email" required /><br/>
                    <label htmlFor="message">Message:</label><br/>
                    <textarea id="message" name="message" required /><br/>
                </div>
                <Button type="submit" name="Send Message"/>
            </form>
        </div>
    )
}

export default ContactForm;