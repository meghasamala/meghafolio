import React from "react";
import Image from "next/image";

interface PhotoProps {
    image: string;
    alt: string;
    desc?: string;
}

export default function Photo(props: PhotoProps) {
    const { image, alt, desc } = props;

    return (
        <div>
            <Image 
                src={image}
                width={600}
                height={450}
                alt={alt}
            />
            {(desc) && <p>{desc}</p>}
        </div>
    )
}