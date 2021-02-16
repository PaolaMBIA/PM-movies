import React from 'react';

import {IMAGE_BASE_URL, POSTER_SIZE} from '../config';
import MovieList from './MovieList';

import {StyledMovieInfo} from './styles/StyledMovieInfo';
import Movie from './Movie';

const MovieInfo = ({movie}) => (
    <StyledMovieInfo backdrop={movie.backdrop_path}>
        <div className="movieinfo-content">
            <div className="movieinfo-thumb">
                <MovieList
                    image={
                        movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : `<img src={https://www.franceactive.org/wp-content/uploads/2017/11/default.png} alt="default" />`
                    }
                    clickable={false}
                />
            </div>
            <div className="movieinfo-text">
                <h1>{movie.title}</h1>
                <h3>OVERVIEW</h3>
                <p>{movie.overview}</p>
            </div>
            <div className="rating-director">
                <div>
                    <h3>VOTE AVERAGE</h3>
                <div className="score">{movie.vote_average}</div>
            </div>
            </div>
        </div>
    </StyledMovieInfo>
)

export default MovieInfo;