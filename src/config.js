//configuration de TMDB

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '932abb19676c822ea035ea1f7b3c7d6b';

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w500';

export {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, SEARCH_BASE_URL, POPULAR_BASE_URL};