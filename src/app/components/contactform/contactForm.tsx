import React from "react";
// import Form from "next/form";

const ContactForm = () => {
    return (
        <form >
            <label htmlFor="name">Name:</label><br/>
            <input type="text" id="name" name="name" required /><br/>
            <label htmlFor="email">Email:</label><br/>
            <input type="email" id="email" name="email" required /><br/>
            <label htmlFor="message">Message:</label><br/>
            <textarea id="message" name="message" required /><br/>
            <button>Send Message</button>
        </form>
    )
}

export default ContactForm;