import React, {useState, useEffect} from 'react';
import {
    POPULAR_BASE_URL,
    SEARCH_BASE_URL, 
    IMAGE_BASE_URL, 
    BACKDROP_SIZE, 
    POSTER_SIZE
} from '../config';

import NoImage from '../assets/NoImage.png';

import PopularImage from './PopularImage';
import Grid from './Grid';
import MovieList from './MovieList';
import LoadMore from './LoadMore';
import Spinner from './Spinner';

//custom hook
import {useHomeFetch} from './hooks/useHomeFetch';


const Home = () => {
    const [{state, loading, error}, fetchMovies] = useHomeFetch();

    const [searchTerm, setSearchTerm] = useState('');

    const loadMoreMovies = () => {
        const searchEndpoint = `${SEARCH_BASE_URL}&page=${state.currentPage + 1}`;

        const popularEndpoint = `${POPULAR_BASE_URL}&page=${state.currentPage + 1}`;

        const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

        fetchMovies(endpoint);
    }

    if(error) return <div>Quelque chose ne va pas ...</div>;
    if(!state.movies[0]) return <Spinner />;
    
    return (
        <>
            <PopularImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.popularImage.backdrop_path}`}
                title={state.popularImage.original_title}
                text={state.popularImage.overview}
            />
            {/* header={searchTerm ? 'search Result' : 'Popular Movies'} */}
            <Grid header={'POPULAR MOVIES'}>
                {
                    state.movies.map(movie => (
                        <MovieList
                            key= {movie.id}
                            clickable
                            image={
                                movie.poster_path 
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                : NoImage
                            }
                            movieId={movie.id}
                            movieName = {movie.original_title}
                            movieNote = {movie.vote_average}
                            movieLanguage = {movie.original_language}
                            movieOverview = {movie.overview}
                            movieDate = {movie.release_date}
                        />
                    ))
                }
            </Grid>
            <Spinner/>
            {state.currentPage < state.totalPages && !loading && (
                <LoadMore text="Load More" callback={loadMoreMovies}/>
            )}           
        </>
    )
}


export default Home;