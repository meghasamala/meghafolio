/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from "react";
// import Form from "next/form";
import Button from "../button/button";
import styles from "../../(pages)/contact/contact.module.css"
import { useRouter } from "next/navigation";
import SuccessMessage from "../successMessage/successMessage";

const ContactForm = () => {
    // https://opennext.js.org/netlify/forms
    // https://github.com/netlify-templates/next-platform-starter/blob/main/components/feedback-form.jsx

    const router = useRouter();

    const [status, setStatus] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    const [visible, setVisible] = useState(true)

    const handleFormSubmit = async (event: { preventDefault: () => void; target: any; }) => {
        event.preventDefault();
        try {
            setStatus(null);
            setError(null);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(new FormData(event.target) as any).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
                setVisible(false);
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
                {console.log(error)}
                setVisible(false);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
            {console.log(error)}
        }
    };

    const backToForm = () => {
        router.back()
    }

    return (
        <div className={styles.formDiv}>
            {visible && (
                <form id="form" className={styles.form} method="POST" onSubmit={handleFormSubmit}>
                <p>You can contact me by sending a message here:</p>
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
            )} 
            {status === 'ok' && (
                <div id="success-message">
                    <SuccessMessage />
                    <Button type="button" name="Send Another" onclick={backToForm}/>
                </div>
            )}
            {status === 'error' && (
                <div>
                    <h3>Oops!</h3>
                    <p>An error occurred during message submission!</p>
                    <p>Please try sending a message again later.</p>
                    <p>In the meantime, check out the other pages of my site, or click the links below!</p>
                </div>
            )}
        </div>
    )
}

export default ContactForm;