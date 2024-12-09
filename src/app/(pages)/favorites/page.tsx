import React from "react";
import FavoriteAlbums from "@/app/components/favoritealbums/favoriteAlbums";
import Carousel from "@/app/components/carousel/carousel";
import movies from "../../models/movies.json";
import games from "../../models/games.json";
import shows from "../../models/shows.json";
import styles from "./favorites.module.css"

const Favorites = () => {
    return (
        <main className={styles.favorites}>
            <div className={styles.topDiv}>
                <div className={styles.titleBox}>
                    <h2>Favorites</h2>
                </div>
                <p>Here are some of my favorite things:</p>
            </div>
            <div className={styles.favsDiv}>
                <div className={styles.favorite}>
                    <div className={styles.favTitleBox}>
                        <h3>Movies</h3>
                    </div>
                    <Carousel pics={movies}/>
                </div>
                <div className={styles.favorite}>
                    <div className={styles.favTitleBox}>
                        <h3>Shows</h3>
                    </div>
                    <Carousel pics={shows}/>
                </div>
                <div className={styles.favorite}>
                <div className={styles.favTitleBox}>
                        <h3>Games</h3>
                    </div>
                    <Carousel pics={games}/>
                </div>
                <div className={styles.favorite}>
                <div className={styles.favTitleBox}>
                        <h3>Albums</h3>
                    </div>
                    <FavoriteAlbums/>
                </div>
            </div>
        </main>
    )
}

export default Favorites;