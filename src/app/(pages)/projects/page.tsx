import React from "react";
import Carousel from "@/app/components/carousel/carousel";
import projects from "../../models/projects.json";
// import styles from "./projects.module.css"

const Projects = () => {

    return (
        <main className="m-0 p-0 flex-1 h-full flex justify-center">
            <div className="basis-[700px]">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center">
                        <h2 className="bg-pink basis-[content] grow-0 shrink-0 mt-2.5 mb-0 p-2.5 font-serif font-light">Projects</h2>
                    </div>
                    <p>Here are some projects I&apos;ve worked on over the past few years:</p>
                </div>
                <div className="basis-[content] grow-0 mt-[5px] mb-2.5 mx-2.5 pb-[15px] md:grid-cols-[1fr] sm:grid-cols-[1fr]">
                    <Carousel
                    projects={projects}
                        />
                </div>
            </div>
        </main>
    )

}

export default Projects;