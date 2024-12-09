import React from "react";
import styles from "../../(pages)/contact/contact.module.css";

const SuccessMessage = () => {
    return(
        <div>
            <div className={styles.messageTitleBox}>
                <h3>Message sent!</h3>
            </div>
            <p>Thanks for reaching out, I&apos;ll get back to you soon!</p>
        </div>
    )
}

export default SuccessMessage;