import React from "react";
import Carousel from "@/app/components/carousel/carousel";
import japanPics from "../../models/japanpics.json"
import spainPics from "../../models/spainpics.json"
import greecePics from "../../models/greecepics.json"
import styles from "./travels.module.css"

const Travels = () => {

    return (
        <main className={styles.travels}>
            <div className={styles.topDiv}>
                <div className={styles.titleBox}>
                    <h2>Travels</h2>
                </div>
                <p>Here are pictures from a few of the places I&apos;ve been recently:</p>
            </div>

            <div className={styles.travel}>
                <div className={styles.travTitleBox}>
                    <h3>Japan</h3>
                </div>
                <Carousel pics={japanPics}/>
            </div>
            <div className={styles.travel}>
                <div className={styles.travTitleBox}>
                    <h3>Spain</h3>
                </div>
                <Carousel pics={spainPics}/>
            </div>
            <div className={styles.travel}>
                <div className={styles.travTitleBox}>
                    <h3>Greece</h3>
                </div>
                <Carousel pics={greecePics}/> 
            </div>          
        </main>
    )
}

export default Travels;