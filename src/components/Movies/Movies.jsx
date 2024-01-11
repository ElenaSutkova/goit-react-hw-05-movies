import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from '../Movies/Movies.module.css';
import MovieList from 'components/MovieList/MovieList';
import { searchMovies } from 'Fetches/fetchAPI';

const Movies = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [showNoResults, setShowNoResults] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const initialSearchTerm = searchParams.get('query')
        const storedSearchTerm = localStorage.getItem('searchTerm');

        if (initialSearchTerm) {
            setSearchTerm(initialSearchTerm)
            searchMovies(initialSearchTerm, setSearchResults, setShowNoResults, setError)
        } else if (storedSearchTerm) {
            setSearchTerm(storedSearchTerm)
            searchMovies(storedSearchTerm, setSearchResults, setShowNoResults, setError)
        }
    }, [searchParams]);

    const handleSearch = async (event) => {
        event.preventDefault();
        const newSearchTerm = searchTerm.trim();

        const params = new URLSearchParams(window.location.search)
        params.set('query', newSearchTerm);

        setSearchParams(params)
        setSearchTerm(newSearchTerm)
        localStorage.setItem('searchTerm', newSearchTerm)
        searchMovies(newSearchTerm, searchResults, setShowNoResults, setError)
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    };

    return (
        <div>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSearch}>
                    <input
                        type="text"
                        className={styles.input}
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder='Search for a movie'
                    />
                    <button className={styles.button} type='submit'>
                        <span className={styles.span}>Search</span>
                    </button>
                </form>
            </div>

            {error && <p>{error}</p>}

            <div>
                {showNoResults && <p>No results found</p>}
                {searchResults.length > 0 && <MovieList movies={searchResults} />}
            </div>

            
        </div>
    )
}

export default Movies;