import React from "react";
import Link from "next/link";
import Photo from "../photo/photo";
// import styles from "../../(pages)/projects/projects.module.css"

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
        <div className="p-[5px]">
            <div>
                <div className="flex flex-row justify-center mb-[5px]">
                    <h3 className="m-0 p-2.5 bg-pink basis-[content] grow-0 shrink-0 font-serif font-light">{name}</h3>
                </div>
                <p className="m-0 p-2.5">{desc}</p>
                <p className="m-0 p-2.5">Technologies used: <span>{tech}</span></p>
            </div>
            <div className="project-img">
                <Photo image={image} width={600} height={350} alt={name}/>
            </div>
            <div className="flex justify-center">
                {(deploy) && <p className="m-0 p-2.5"><Link href={deploy} target="_blank" className="text-[black] no-underline p-[5px] bg-green hover:bg-pink cursor-pointer">Deployment</Link></p>}
                {(repo) && <p className="m-0 p-2.5"><Link href={repo} target="_blank" className="text-[black] no-underline p-[5px] bg-green hover:bg-pink cursor-pointer">Repository</Link></p>}
            </div>
        </div>
    )
}

export default Project;