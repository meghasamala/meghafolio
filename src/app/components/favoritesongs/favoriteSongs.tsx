/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from "react";
import lastfm from "@/app/lib/lastfm/lastFm";
import Carousel from "../carousel/carousel";

// reference: https://www.staycaffeinated.com/2024/02/05/lastfm

const favoriteSongs = () => {
    
    const favSongsData : any = lastfm({method : "user.gettoptracks"}, {limit : 5});
    const songsArray = [];
    songsArray.push(favSongsData);
    console.log(songsArray)
    // console.log(nowPlayingData);
    // const currentTrack = nowPlayingData?.recenttracks?.track[0];
    // console.log(currentTrack);
    // const artist = nowPlayingData?.recenttracks?.track[0].artist['#text'];
    // const songName = nowPlayingData?.recenttracks?.track[0].name;
    // const albumCover = nowPlayingData?.recenttracks?.track[0].image[3]['#text'];
    // const album = nowPlayingData?.recenttracks?.track[0].album['#text'];



    return (
        <>
            <p>wa</p>
        </>
        
        // {(songName) && <p>Song: {songName}</p>}
        // {(artist) && <p>Artist: {artist}</p>}
        // {(album) && <p>Album: {album}</p>}
    )
}

export default favoriteSongs;