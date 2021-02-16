import React from 'react';
import styled from 'styled-components';
import {Link} from '@reach/router';


import {StyledMovieThumb} from './styles/StyledMovieThumb';

const Styledh6 = styled.div `
    height: 63px;

    h6{
        text-align: center;
        font-size: 20px;
    }
`;

const MovieList = ({image, movieId, clickable,movieName, movieOverview,movieNote,movieLanguage, movieDate}) =>(
    <StyledMovieThumb>
        {clickable ? (
            <div className="movieBlock">  
      
                    <Styledh6>
                        <h6>{movieName}</h6>
                    </Styledh6>
                    <Link to ={`/${movieId}`}>
                        <img className="clickable" src={image} alt="movieList"/>
                    </Link>

                    <p>Vote average: <span>{movieNote}</span></p>
                    <p>Original language: <span>{movieLanguage}</span> </p>
                    <p>Release date: <span>{movieDate}</span> </p>
                <div className="movie-over">
                    <p>{movieOverview}</p>
                </div>
                
            </div>

        ) : (
            <img src={image} />
        )}
    </StyledMovieThumb>
)

export default MovieList;