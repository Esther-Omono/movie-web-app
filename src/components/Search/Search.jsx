import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './search.css'

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    
    const handleSearch = async () => {
        setLoading(true);
        setSearchResults([]);
        onSearch(query);
        
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c07bc06b8f15e84970110746b2cbb76e&language=en-US&query=${query}&page=1&include_adult=false`);
            if (response.ok) {
                const data = await response.json();
                setSearchResults(data.results);
            } else {
                console.error('Error fetching search results');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    
        setLoading(false);
      };

    return (
        <div className='searchContainer'>
            <input
                type='text'
                placeholder='Search...'
                value={query}
                className='searchInput'
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch} disabled={loading} className='searchButton'>
                <AiOutlineSearch className='searchIcon'/>
                {loading ? 'Searching...' : 'Search'}
            </button>
        </div>
    )
}

export default Search;