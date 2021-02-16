import React, {useState, useRef} from 'react';
import '../cssComponents/Nav.css';
import {Link} from '@reach/router';
import styled from 'styled-components';
import {useHomeFetch} from './hooks/useHomeFetch';
import {Router} from '@reach/router';

import movie from '../assets/movie.png';
import pop from '../assets/pop.png';

const Nav = () => {

    const StyleImage1 = styled.img`
        width: 65px;
        height: 60px;

        @media screen and (max-width: 600px) {
            margin-top: 10px;
            width: 35px;
            height: 30px;
        }
        
        @media screen and (max-width: 375px) {
            margin-top: 10px;
            margin-right: -25px;
            width: 35px;
            height: 30px;  
        }
    `;
    const StyleImage2 = styled.img`
        width: 130px;
        height: 60px;

        @media screen and (max-width: 600px) {
            margin-top: 10px;
            width: 70px;
            height: 30px;
        }
        
        @media screen and (max-width: 375px) {
            margin-top: 10px;
            margin-left:-25px;
            margin-right:20px;
            width: 70px;
            height: 30px;  
        }
    `;
    const StyleLogo = styled.a`
        font-family: "cursive";
        
        span{
            color:red;
            font-weight: bold;
        }
    `;

    return(
        <>
            <nav>
                <div className="nav-wrapper">
                    <Link to ="/">
                        <StyleImage2 src={movie}alt="movie"/>
                        <StyleLogo href="#!" className="brand-logo"> <span>PM</span>  movies</StyleLogo>
                    </Link>
                    <div>
                        <StyleImage1 src={pop} alt="pop"/>
                        <StyleImage1 src={pop} alt="pop"/>
                    </div>
                    {/* {
                        <Search callback= {searchMovies} />
                    } */}
                </div>
            </nav>
        </>
    );
}

export default Nav;