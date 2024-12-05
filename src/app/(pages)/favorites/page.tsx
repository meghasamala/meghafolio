import React from "react";
import FavoriteAlbums from "@/app/components/favoritealbums/favoriteAlbums";

const Favorites = () => {
    return (
        <>
            <h2>Favorites</h2>
            <p>Here are some of my favorite things:</p>
            <div className="fav-box">
                <h3>Movies:</h3>
            </div>
            <div className="fav-box">
                <h3>Shows:</h3>
            </div>
            <div className="fav-box">
                <h3>Games:</h3>
            </div>
            <div className="fav-box">
                <h3>Albums:</h3>
                <FavoriteAlbums/>
            </div>
        </>
    )
}

export default Favorites;