import React from "react";
// import Form from "next/form";
import Button from "../button/button";

const ContactForm = () => {
    return (
        <form >
            <label htmlFor="name">Name:</label><br/>
            <input type="text" id="name" name="name" required /><br/>
            <label htmlFor="email">Email:</label><br/>
            <input type="email" id="email" name="email" required /><br/>
            <label htmlFor="message">Message:</label><br/>
            <textarea id="message" name="message" required /><br/>
            <Button type="submit" name="Send Message"/>
        </form>
    )
}

export default ContactForm;