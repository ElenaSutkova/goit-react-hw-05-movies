import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Cast/Cast.module.css';
import { fetchCast } from 'Fetches/fetchAPI';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const getCast = async () => {
            const castData = await fetchCast(movieId)
            setCast(castData)
        };
        getCast()
    }, [movieId]);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Cast</h2>
            <ul className={styles.list}>
                {cast.map((actor) => (
                    <li className={styles.item} key={actor.id}>
                        <img
                            className={styles.img}
                            src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : `https://fastly.picsum.photos/id/593/1774/2365.jpg?hmac=zzvok1xX2Is_tGRfdHUANqWsOIK0T-HVzWPkaMqZInw`}
                            alt={actor.name} />
                        <p className={styles.name}>{actor.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cast;