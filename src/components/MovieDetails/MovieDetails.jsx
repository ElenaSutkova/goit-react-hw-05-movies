import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import styles from '../MovieDetails/MovieDetails.module.css';
import { fetchMovieDetails } from 'Fetches/fetchAPI';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        fetchMovieDetails(movieId, setMovieDetails)
    }, [movieId]);

    const backLink = useRef(location.state?.from || '/');

    if (!movieDetails) {
        return <div>Loading...</div>
    };

    const genres = movieDetails.genres.map((genre) => genre.name).join(', ');

    return (
        <div className={styles.container}>
            <div className={styles.cont}>
                <div className={styles.buttonImg}>
                    <Link className={styles.goBack} to={backLink.current}>Go back</Link>
                    {movieDetails.poster_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                            className={styles.img} />
                    )}
                </div>
                <div className={styles.details}>
                    <h2>{movieDetails.title}</h2>
                    <p>User Score: {movieDetails.vote_average}</p>
                    <h3>Overview</h3>
                    <p>{movieDetails.overview}</p>
                    <h3>Genres</h3>
                    <p>{genres}</p>
                </div>
            </div>
            <div className={styles.additionalInfo}>
                <h3 className={styles.additionalsTitle}>Additional Information</h3>
                <ul>
                    <li><Link to={`/movies/${movieId}/cast`}> Cast</Link>
                    </li>
                    <li>
                        <Link to={`/movies/${movieId}/reviews`}> Reviews </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default MovieDetails;