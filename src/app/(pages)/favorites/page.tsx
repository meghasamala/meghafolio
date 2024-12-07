import React from "react";
import FavoriteAlbums from "@/app/components/favoritealbums/favoriteAlbums";
import Carousel from "@/app/components/carousel/carousel";
import movies from "../../models/movies.json";
import games from "../../models/games.json";
import shows from "../../models/shows.json";

const Favorites = () => {
    return (
        <main className="favs">
            <h2>Favorites</h2>
            <p>Here are some of my favorite things:</p>
            <div className="fav-box">
                <h3>Movies:</h3>
                <Carousel pics={movies}/>
            </div>
            <div className="fav-box">
                <h3>Shows:</h3>
                <Carousel pics={shows}/>
            </div>
            <div className="fav-box">
                <h3>Games:</h3>
                <Carousel pics={games}/>
            </div>
            <div className="fav-box">
                <h3>Albums:</h3>
                <FavoriteAlbums/>
            </div>
        </main>
    )
}

export default Favorites;