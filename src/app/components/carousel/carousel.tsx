/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from "react";
import Project from "../project/project";
import Button from "../button/button";

// reference used: https://www.newline.co/@andreeamaco/react-carousel-building-the-component-from-scratch-vs-using-a-library--7da468d4

const Carousel = ({ projects } : {projects : any}) => {

    const [currentProject, setProject] = useState(0);
    const len = projects.length

    const forward = () => {
        const nextProject = currentProject === len - 1 ? 0 : currentProject + 1;
        setProject(nextProject);
    }

    const backward = () => {
        const prevProject = currentProject === 0 ? len - 1 : currentProject - 1;
        setProject(prevProject);
    }

    return (
        <>
            <div id="carousel">
                {projects.map((project:any, index:number) => {
                    return (
                        <div key={index}>
                            {
                            index === currentProject &&
                            <Project
                            name={project.name}
                            desc={project.desc}
                            tech={project.tech}
                            image={project.image}
                            repo={project.repo}
                            deploy={project.deploy} />
                            }                   
                        </div>
                        
                    );
                })}
                <Button type="button" onclick={backward} name="Prev"/>
                <Button type="button" onclick={forward} name="Next"/>
            </div>
        </>
    )

}

export default Carousel;