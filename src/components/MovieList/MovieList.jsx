import React from "react";
import { Link, useLocation } from 'react-router-dom';
import styles from '../MovieList/MovieList.module.css';

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {movies.map((movie) => (
                    <li key={movie.id} className={styles.item}>
                        <Link
                            to={`/movies/${movie.id}`}
                            state={{ from: location.pathname }}
                        >
                            {movie.title || movie.name} - {movie.release_date || movie.first_air_date}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default MovieList;