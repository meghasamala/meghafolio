/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from "react";
import lastfm from "@/app/lib/lastfm/lastFm";
import Photo from "../photo/photo";

// reference: https://www.staycaffeinated.com/2024/02/05/lastfm

const NowPlaying = () => {
    
    const nowPlayingData : any = lastfm({method : "user.getrecenttracks"}, {limit : 1});
    // console.log(nowPlayingData);
    const currentTrack = nowPlayingData?.recenttracks?.track[0];
    // console.log(currentTrack);
    const artist = nowPlayingData?.recenttracks?.track[0].artist['#text'];
    const songName = nowPlayingData?.recenttracks?.track[0].name;
    const albumCover = nowPlayingData?.recenttracks?.track[0].image[3]['#text'];
    const album = nowPlayingData?.recenttracks?.track[0].album['#text'];


    if (!currentTrack || !currentTrack['@attr'] || !currentTrack['@attr'].nowplaying) {
        return (
            <p>{`Not currently listening to anything! Check back later :^)`}</p>
        )
    };

    return (
        <div>
            <Photo
            image={albumCover}
            width={300}
            height={300}
            alt={album} />
            <div>
                {(songName) && <p>Song: {songName}</p>}
                {(artist) && <p>Artist: {artist}</p>}
                {(album) && <p>Album: {album}</p>}
            </div>
        </div>
    )
}

export default NowPlaying;