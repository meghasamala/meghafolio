import React from "react";
import Project from "@/app/components/project/project";
import projects from "../../models/projects.json";

const Projects = () => {

    return (
        <>
            <h2>Projects</h2>
            <p>Here are a few of the projects I&apos;ve worked on over the past few years:</p>
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