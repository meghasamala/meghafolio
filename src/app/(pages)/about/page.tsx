import React from "react";
import Photo from "@/app/components/photo/photo";
// import styles from "./about.module.css";

const About = () => {

    return (
        <main className="m-0 p-0 flex-1 h-full flex justify-center">
            <div className="w-[450px] mb-[30px]">
                <div className="flex flex-row justify-center">
                    <h2 className="bg-pink basis-[content] grow-0 shrink-0 mb-5 p-2.5 font-serif font-light">About Me</h2>
                </div>
                <div className="bg-green p-[30px]">
                    <Photo image={"/IMG_1383.jpg"} width={400} height={300} alt="a picture of me in new york"/>
                    <p id="personal-info">
                        Hi, my name is Megha and I am an aspiring full stack web developer.
                        I am currently enrolled in the CIS Master&apos;s program at BU, and I graduated
                        from the University of Texas at Austin in 2022 with a Bachelor&apos;s degree in Neuroscience.
                        A few technologies I am proficient in include: HTML, CSS, JavaScript, TypeScript, Java, SQL, React, and more.
                        When I am not coding, you can find me playing video games or trying to find the 
                        best strawberry matcha latte in the greater Dallas area. 
                    </p>
                </div>
            </div>
        </main>
    )
}

export default About;