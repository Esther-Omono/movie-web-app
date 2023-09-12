import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './SearchResults.css';

const SearchResults = ({ results, loading }) => {
    return (
        <div className="search-results">
            {loading ? (
                <div className='loading'>Loading...</div>
            ) : (
                results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            )}
        </div>
    );
};

export default SearchResults;
