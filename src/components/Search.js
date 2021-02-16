import React, {useState, useRef} from 'react';
import '../cssComponents/Nav.css';
import {Link} from '@reach/router';
import {useHomeFetch} from './hooks/useHomeFetch';
import {Router} from '@reach/router';

import {
    API_URL, 
    API_KEY, 
    IMAGE_BASE_URL, 
    BACKDROP_SIZE, 
    POSTER_SIZE,
    SEARCH_BASE_URL,
    POPULAR_BASE_URL
} from '../config';

import MovieList from './MovieList';

const Search = ({callback}) => {
    const[state, setState] = useState('');
    const timeOut = useRef(null);

    const doSearch = event => {
        const{value} = event.target;
        setState(value);

        clearTimeout(timeOut.current);
        setState(value);

        timeOut.current = setTimeout(() =>{
            callback(value);
        }, 500);
    }
    return(
        <>
            <form action="" >
                <div className="input-field">
                    <input 
                        type="text" 
                        placeholder="rechercher un film"
                        onChange={doSearch}
                        value={state}
                    />
                    <label className="label-icon" htmlFor="search">
                    <button type="submit"> <i className="material-icons">search</i></button>
                    </label>
                    {/* <i className="material-icons">close</i> */}
                </div>
            </form>
        </>
    );
}

export default Search;