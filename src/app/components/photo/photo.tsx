import React from "react";
import Image from "next/image";

interface PhotoProps {
    image: string;
    alt: string;
    desc?: string;
    width: number;
    height: number;
}

const Photo = (props: PhotoProps) => {
    const { image, alt, desc, width, height } = props;

    return (
        <div>
            <Image 
                src={image}
                width={width}
                height={height}
                alt={alt}
            />
            {(desc) && <p>{desc}</p>}
        </div>
    )
}

export default Photo;