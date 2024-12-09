/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from "react";
import lastfm from "@/app/lib/lastfm/lastFm";
import Carousel from "../carousel/carousel";

// reference: https://www.staycaffeinated.com/2024/02/05/lastfm

const FavoriteAlbums = () => {
    
    const favAlbumsData : any = lastfm({method : "user.gettopalbums"}, {limit : 5});
    const albums : Array<object> = favAlbumsData?.topalbums?.album
    // console.log(albums)

    const topAlbums = []

    for (const i in albums) {
        topAlbums.push({
            album: favAlbumsData?.topalbums?.album[i].name,
            artist: favAlbumsData?.topalbums?.album[i].artist.name,
            image: favAlbumsData?.topalbums?.album[i].image[3]['#text'],
            desc: `${favAlbumsData?.topalbums?.album[i].name} by ${favAlbumsData?.topalbums?.album[i].artist.name}`,
            alt: `${favAlbumsData?.topalbums?.album[i].name} by ${favAlbumsData?.topalbums?.album[i].artist.name}`,
            width: 300,
            height: 300
        })
    }

    // console.log(topAlbums);

    return (
        <>
            <Carousel pics={topAlbums}/>   
        </>
        
    )
}

export default FavoriteAlbums;