/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from "react";
import Photo from "../photo/photo";

// reference used: https://www.newline.co/@andreeamaco/react-carousel-building-the-component-from-scratch-vs-using-a-library--7da468d4

const Carousel = ({ pics } : {pics : any}) => {

    const [currentPic, setPic] = useState(0);
    const len = pics.length

    const forward = () => {
        const nextPic = currentPic === len - 1 ? 0 : currentPic + 1;
        setPic(nextPic);
    }

    const backward = () => {
        const prevPic = currentPic === 0 ? len - 1 : currentPic - 1;
        setPic(prevPic);
    }

    return (
        <>
            <div id="carousel">
                {pics.map((pic:any, index:number) => {
                    return (
                        <div key={index}>
                            {
                            index === currentPic &&
                            <Photo
                            image={pic.image}
                            alt={pic.alt}
                            desc={pic.desc}
                            width={pic.width}
                            height={pic.height} />
                            }                   
                        </div>
                        
                    );
                })}
                <button onClick={backward}>Prev</button>
                <button onClick={forward}>Next</button>
            </div>
        </>
    )

}

export default Carousel;