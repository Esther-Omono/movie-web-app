import React from 'react';
import './search.css'

function Search() {
    return (
        <> 
            <div className='searchWrapper'>
                <input
                    type='text'
                    placeholder='Search...'
                    className='searchBar'
                />
                <button></button>
            </div>
        </>
    )
}

export default Search;