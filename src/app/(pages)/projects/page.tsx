import React from "react";
import Carousel from "@/app/components/carousel/carousel";
import projects from "../../models/projects.json";
import styles from "./projects.module.css"

const Projects = () => {

    return (
        <main className={styles.projects}>
            <div className={styles.bigDiv}>
                <div className={styles.topDiv}>
                    <div className={styles.titleBox}>
                        <h2 className="title">Projects</h2>
                    </div>
                    <p>Here are some projects I&apos;ve worked on over the past few years:</p>
                </div>
                <div className={styles.projectsDiv}>
                    <Carousel
                    projects={projects}
                        />
                </div>
            </div>
        </main>
    )

}

export default Projects;