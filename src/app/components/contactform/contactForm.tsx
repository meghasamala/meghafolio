/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from "react";
// import Form from "next/form";
import Button from "../button/button";
import styles from "../../(pages)/contact/contact.module.css"
import SuccessMessage from "../successMessage/successMessage";

const ContactForm = () => {
    // https://opennext.js.org/netlify/forms
    // https://github.com/netlify-templates/next-platform-starter/blob/main/components/feedback-form.jsx

    const [status, setStatus] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    const handleFormSubmit = async (event: { preventDefault: () => void; target: any; }) => {
        event.preventDefault();
        try {
            setStatus(null);
            setError(null);
            // const myForm = event.target;
            // const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(new FormData(event.target) as any).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <div className={styles.formDiv}>
            <form className={styles.form} method="POST" onSubmit={handleFormSubmit}>
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

                {status === 'ok' && (
                    <SuccessMessage />
                )}
                {status === 'error' && (
                    <div>
                        {error}
                    </div>
                )}
            </form>
        </div>
    )
}

export default ContactForm;