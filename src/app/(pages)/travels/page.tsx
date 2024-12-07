import React from "react";
import Carousel from "@/app/components/carousel/carousel";
import japanPics from "../../models/japanpics.json"
import spainPics from "../../models/spainpics.json"
import greecePics from "../../models/greecepics.json"

const Travels = () => {

    return (
        <main className="travels">
            <h2>Travels</h2>
            <p>Here are pictures from a few of the places I&apos;ve been recently:</p>

            <h3>Japan</h3>
            <Carousel pics={japanPics}/>

            <h3>Spain</h3>
            <Carousel pics={spainPics}/>

            <h3>Greece</h3>
            <Carousel pics={greecePics}/>           
        </main>
    )
}

export default Travels;