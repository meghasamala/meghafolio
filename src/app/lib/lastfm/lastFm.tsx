/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState, useEffect } from "react";

// reference: CS601 HW2 and https://medium.com/@samkitson/fetching-and-displaying-scrobbled-data-with-react-and-the-last-fm-api-28d048386da8
// https://www.last.fm/api/intro

const lastfm = ({method} : {method : string}, {limit} : {limit : number}) => {
    const username = process.env.NEXT_PUBLIC_LASTFM_USERNAME
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const [lfData, updateLfData] = useState();

    useEffect(() => {
        fetch(`https://ws.audioscrobbler.com/2.0/?method=${method}&user=${username}&api_key=${apiKey}&format=json&limit=${limit}`)
        .then(response => {
            if (response.ok) {
            const data = response.json();
            return data
        }
        throw new Error(`${response.status}`)
        })
        .then((data) => {
            updateLfData(data)
        })
        .catch((error: any) => console.log(error))

    }, [])

    return lfData;

}

export default lastfm;