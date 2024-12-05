'use client'
import { useState, useEffect } from "react";

// reference: CS601 HW2 and https://medium.com/@samkitson/fetching-and-displaying-scrobbled-data-with-react-and-the-last-fm-api-28d048386da8
// https://www.last.fm/api/intro

const lastfm = ({method} : {method : string}, {limit} : {limit : number}) => {
    const username = "megsamala"
    const apiKey = "68e96bea00f030448438fffb9eb46cb4"
    const [lfData, updateLfData] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=${method}&user=${username}&api_key=${apiKey}&format=json&limit=${limit}`);
                if (!response.ok) {
                    throw new Error(`${response.status}`);
                }
                const data = await response.json();
                return data;
        
            } catch (error) {
                console.error(error);
            }
        }

        getData().then(data => {
            updateLfData(data)
        })
        .catch(error => console.log(error))

    }, [])

    return lfData;

}

export default lastfm;