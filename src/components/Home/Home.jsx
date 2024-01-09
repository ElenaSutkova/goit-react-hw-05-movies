import React, { useState, useEffect } from "react";
import styles from '../Home/Home.module.css';
import MovieList from "components/MovieList/MovieList";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiKey = '29f90e29dc5d68acf14782a0c1b612a1';
                const timeWindow = 'week';
                const response = await fetch(`https://api.themoviedb.org/3/trending/all/${timeWindow}?api_key=${apiKey}`);

                if (response.ok) {
                    const data = await response.json()
                    setMovies(data.results)
                } else {
                    throw new Error('Network response was not ok.')
                }
            } catch (error) {
                console.error('Error fetching movies:', error)
            }
        };

        fetchMovies();
    }, [])

    return (
        <div>
            <h2 className={styles.title}>Trending Movies</h2>
            <MovieList movies={movies} />
        </div>
    )
};

export default Home