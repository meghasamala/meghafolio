import React from "react";
import NowPlaying from "@/app/components/nowplaying/nowPlaying";
import Photo from "@/app/components/photo/photo";
import nowPics from "../../models/nowPics.json";

const Now = () => {
    return (
        <>
            <h2>Now</h2>
            <p>Here is what I have been up to lately:</p>
            <div className="now-box">
                <h3>Currently working on:</h3>
                <ul>
                    <li>Improving my electric bass skills</li>
                    <li>Internship applications</li>
                    <li>This website!</li>
                </ul>
            </div>
            <div className="now-box">
                <h3>Currently listening to:</h3>
                <p>{`If I'm listening to anything, it'll show below! Powered by Last.fm :^)`}</p>
                <NowPlaying/>
            </div>
            <div className="now-box">
                <h3>Currently watching:</h3>
                <Photo 
                image={nowPics[0].image}
                alt={nowPics[0].alt}
                desc={nowPics[0].desc}
                width={nowPics[0].width}
                height={nowPics[0].height}/>
            </div>
            <div className="now-box">
                <h3>Currently playing:</h3>
                <Photo 
                image={nowPics[1].image}
                alt={nowPics[1].alt}
                desc={nowPics[1].desc}
                width={nowPics[1].width}
                height={nowPics[1].height}/>
            </div>
            <div className="now-box">
                <h3>Currently reading:</h3>
                <Photo 
                image={nowPics[2].image}
                alt={nowPics[2].alt}
                desc={nowPics[2].desc}
                width={nowPics[2].width}
                height={nowPics[2].height}/>
            </div>
        </>
    )
}

export default Now;