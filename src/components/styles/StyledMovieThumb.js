import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    height: auto;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;

    :hover {
      opacity: 0.8;
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }

  }

  span{
    font-weight: bold;
  }
  .movieBlock{
    position: relative;
    overflow: hidden;
  }

  .movie-over{
    background-color: rgba(255,255,255,0.8);
    position: absolute;
    bottom:60px;
    left:0;
    right:0;
    color:black;
    border-radius:10px;
    padding: 1rem;
    font-size: 0.8rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .movieBlock:hover .movie-over{
    transform: translateX(0%);
  }
`;
