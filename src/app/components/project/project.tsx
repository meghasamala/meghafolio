import React from "react";
import Link from "next/link";
import Image from "next/image";
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
            <h2>{name}</h2>
            <p>{desc}</p>
            <p>Technologies used: <span>{tech}</span></p>
            <div className="project-img">
                <Image src={image} width={600} height={350} alt={name}/>
            </div>
            {(deploy) && <p><Link href={deploy} target="_blank">Deployment</Link></p>}
            {(repo) && <p><Link href={repo} target="_blank">Repository</Link></p>}
        </div>
    )
}

export default Project;