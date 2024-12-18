/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from "react";
import Button from "../button/button";
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
        <div className="flex justify-center">
            {visibleForm && (
                <form id="form" className="basis-[content] grow-0 shrink-0 pb-2.5" method="POST" onSubmit={handleFormSubmit}>
                <p className="m-0 p-2.5">You can contact me by sending a message here:</p>
                <input type="hidden" name="form-name" value="contact" />
                    <div className="bg-green m-2.5 p-5">
                        <label htmlFor="name">Name:</label><br/>
                        <input className="w-[300px] m-2.5 p-2.5 font-sans h-[30px] border-transparent focus:outline-none cursor-text" type="text" id="name" name="name" required /><br/>
                        <label htmlFor="email">{`Email (Optional):`}</label><br/>
                        <input className="w-[300px] m-2.5 p-2.5 font-sans h-[30px] border-transparent focus:outline-none cursor-text" type="email" id="email" name="email" /><br/>
                        <label htmlFor="message">Message:</label><br/>
                        <textarea className="w-[300px] m-2.5 p-2.5 font-sans h-[100px] border-transparent focus:outline-none cursor-text" id="message" name="message" required /><br/>
                    </div>
                    <Button type="submit" name="Send Message"/>
                </form>
            )} 
            {status === 'ok' && visibleMessage && (
                <div className="basis-[content] grow-0 shrink-0 pb-2.5">
                    <SuccessMessage />
                    <Button type="button" name="Send Another" onclick={backToForm}/>
                </div>
            )}
            {status === 'error' && (
                <div className="basis-[content] grow-0 shrink-0 pb-2.5">
                    <div className="flex flex-row justify-center mt-[25px] mb-2.5">
                        <h3 className="m-0 p-2.5 bg-pink basis-[content] grow-0 shrink-0 font-serif font-light">Oops!</h3>
                    </div>
                    <p className="m-0 p-2.5">An error occurred during message submission!</p>
                    <p className="m-0 p-2.5">Please try sending a message again later.</p>
                    <p className="m-0 p-2.5">In the meantime, check out the other pages of my site, or click the links below!</p>
                </div>
            )}
        </div>
    )
}

export default ContactForm;