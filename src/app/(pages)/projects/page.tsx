import React from "react";
import Project from "@/app/components/project/project";
import projects from "../../models/projects.json";

const Projects = () => {

    // const projects = [
    //     {
    //         name: "Soundtracker",
    //         desc: "A web app created for a group project, utilizing the IMDB API to allow users to look up a movie and receive the full soundtrack with names, lyrics, and music videos.",
    //         tech: "HTML, CSS, Bulma, JavaScript, jQuery",
    //         image: "/soundtracker.png",
    //         repo: "https://github.com/itsmeadriana/Soundtracker",
    //         deploy: "https://itsmeadriana.github.io/Soundtracker/"
    //     },
    //     {
    //         name: "TunedIn",
    //         desc: "A media database created for CS669 with which users can track the books, movies, games, etc. they read/watch/play and add reviews.",
    //         tech: "SQL, PostgreSQL",
    //         image: "/db.png",
    //         repo: "https://github.com/meghasamala/cs669/blob/main/project.sql",
    //         deploy: undefined
    //     },
    //     {
    //         name: "Code Quiz",
    //         desc: "A simple code quiz for users to test their knowledge.",
    //         tech: "HTML, CSS, JavaScript",
    //         image: "/code-quiz-img.png",
    //         repo: "https://github.com/meghasamala/code-quiz",
    //         deploy: "https://meghasamala.github.io/code-quiz/"
    //     }
    // ]

    return (
        <>
            <h2>Projects</h2>
            <p>Here are a few of the projects I&apos;ve worked on over the past few years.</p>
            <div>
                {projects.map((project) => 
                    <Project 
                    key={project.name}
                    name={project.name}
                    desc={project.desc}
                    tech={project.tech}
                    image={project.image}
                    repo={project.repo}
                    deploy={project.deploy} />
                )}
            </div>
        </>
    )

}

export default Projects;