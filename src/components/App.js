import React , {useState}  from 'react';
import {Router} from '@reach/router';

//importer le .css
import '../App.css'

//importer les vues
import Nav from './Nav';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';

import {useHomeFetch} from './hooks/useHomeFetch';

import {
    API_URL, 
    API_KEY, 
    IMAGE_BASE_URL, 
    BACKDROP_SIZE, 
    POSTER_SIZE
} from '../config';


const App = () => {
 
   return(
    <div>
      <Nav/>
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <NotFound default />
      </Router>
    </div>
   )
}

export default App;
// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       post: {},
//       movies: [],
//       searchTerm: '',
//       totalResults: 0,
//       currentPage: 1
//     }
//     this.apiKey = `932abb19676c822ea035ea1f7b3c7d6b`
//   }


//   handleSubmit= (e) => {
//     e.preventDefault();

//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
//     .then(data => data.json())
//     .then(data => {
//       console.log(data);
//       this.setState({movies: [...data.results]})
//     })
//   }

//   handleChange = (e) => {
//     this.setState({
//       searchTerm: e.target.value
//     })
//   }

//   handleClear = () => {
//     this.setState({
//       searchTerm: ' '
//     })
//   }

//   nextPage = (pageNumber) => {
//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
//     .then(data => data.json())
//     .then(data => {
//       console.log(data);
//       this.setState({movies: [...data.results]})
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <Nav handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleClear={this.handleClear} />
//         <MovieList movies={this.state.movies}/>
//       </div>
//     );
//   }
// }


