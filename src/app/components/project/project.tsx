import React from "react";
import Link from "next/link";
import Photo from "../photo/photo";
import styles from "../../(pages)/projects/projects.module.css"

// https://react.dev/learn/typescript
interface ProjectProps {
    name: string;
    desc: string;
    tech: string;
    image: string;
    repo?: string;
    deploy?: string;
}

const Project = (props: ProjectProps) => {
    const { name, desc, tech, image, repo, deploy } = props;

    return (
        <div className={styles.project}>
            <div className={styles.projDesc}>
                <div className={styles.projTitleBox}>
                    <h3>{name}</h3>
                </div>
                <p>{desc}</p>
                <p>Technologies used: <span>{tech}</span></p>
            </div>
            <div className="project-img">
                <Photo image={image} width={600} height={350} alt={name}/>
            </div>
            <div className={styles.projButton}>
                {(deploy) && <p><Link href={deploy} target="_blank">Deployment</Link></p>}
                {(repo) && <p><Link href={repo} target="_blank">Repository</Link></p>}
            </div>
        </div>
    )
}

export default Project;