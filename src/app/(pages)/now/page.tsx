import React from "react";
import NowPlaying from "@/app/components/nowplaying/nowPlaying";

const Now = () => {
    return (
        <>
            <h2>Now</h2>
            <p>Here is what I have been up to lately:</p>
            <div className="now-box">
                <h3>Currently working on:</h3>
            </div>
            <div className="now-box">
                <h3>Currently watching:</h3>
            </div>
            <div className="now-box">
                <h3>Currently listening to:</h3>
                <p>{`If I'm listening to anything, it'll show below! Powered by Last.fm :^)`}</p>
                <NowPlaying/>
            </div>
            <div>
            <h3>Currently playing:</h3>
            </div>
        </>
    )
}

export default Now;