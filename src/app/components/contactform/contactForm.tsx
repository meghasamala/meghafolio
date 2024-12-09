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

    const [visibleForm, setVisibleForm] = useState(true)
    const [visibleMessage, setVisibleSuccess] = useState(false)

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
                setVisibleForm(false);
                setVisibleSuccess(true)
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
                {console.log(error)}
                setVisibleForm(false);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
            {console.log(error)}
        }
    };

    const backToForm = () => {
        setVisibleForm(true)
        setVisibleSuccess(false)
    }

    return (
        <div className={styles.formDiv}>
            {visibleForm && (
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
            {status === 'ok' && visibleMessage && (
                <div className={styles.message}>
                    <SuccessMessage />
                    <Button type="button" name="Send Another" onclick={backToForm}/>
                </div>
            )}
            {status === 'error' && (
                <div className={styles.message}>
                    <div className="messageTitleBox">
                        <h3>Oops!</h3>
                    </div>
                    <p>An error occurred during message submission!</p>
                    <p>Please try sending a message again later.</p>
                    <p>In the meantime, check out the other pages of my site, or click the links below!</p>
                </div>
            )}
        </div>
    )
}

export default ContactForm;