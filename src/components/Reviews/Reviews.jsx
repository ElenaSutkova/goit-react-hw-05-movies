import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'Fetches/fetchAPI';
import styles from '../Reviews/Reviews.module.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const getReviews = async () => {
            const reviewsData = await fetchReviews(movieId)
            setReviews(reviewsData)
        };
        getReviews()
    }, [movieId]);

    return (
        <div>
            <h2 className={styles.title}>Reviews</h2>
            <div>{reviews.length > 0 ? (
                <ul className={styles.list}>
                    {reviews.map((review) => (
                        <li className={styles.item} key={review.id}>
                            <p>{review.content}</p>
                            <p className={styles.author}>Author: {review.author}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews available</p>
            )}
            </div>
        </div>
    )
};

export default Reviews;