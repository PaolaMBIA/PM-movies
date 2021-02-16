import React, {useState, useEffect} from 'react';

import MovieInfo from './MovieInfo';
import MovieList from './MovieList';
import Grid from './Grid';

import {useMovieFetch} from './hooks/useMovieFetch';
import {useHomeFetch} from './hooks/useHomeFetch';

import NoImage from '../assets/NoImage.png';

import {
    API_KEY,
    IMAGE_BASE_URL, 
    POSTER_SIZE
} from '../config';


const Movie = ({movieId}) =>{
    const [state, setState] = useState({movies: []});
    const [movie, loading, error] = useMovieFetch(movieId);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie.original_title}`)
    .then(data => data.json())
    .then(data => {  
      setState({movies: [...data.results]});
    })

    return(
        <>
            <MovieInfo movie={movie}/>
            <Grid header={'SIMILAR FILMS'}>
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
        </>
    )
};

export default Movie;