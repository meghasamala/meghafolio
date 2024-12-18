import React from "react";

const SuccessMessage = () => {
    return(
        <div>
            <div className="flex flex-row justify-center mt-[25px] mb-2.5">
                <h3 className="m-0 p-2.5 bg-pink basis-[content] grow-0 shrink-0 font-serif font-light">Message sent!</h3>
            </div>
            <p>Thanks for reaching out, I&apos;ll get back to you soon!</p>
        </div>
    )
}

export default SuccessMessage;