import React from "react";
import Project from "@/app/components/project/project";
import projects from "../../models/projects.json";
import styles from "./projects.module.css"

const Projects = () => {

    return (
        <main className={styles.projects}>
            <div className={styles.topDiv}>
                <h2 className="title">Projects</h2>
                <p>Here are a few of the projects I&apos;ve worked on over the past few years:</p>
            </div>
            <div className={styles.projectsDiv}>
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
        </main>
    )

}

export default Projects;