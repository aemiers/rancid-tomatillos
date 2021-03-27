import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import movieData from '../Data/movieData';
import fakeMovieDetails from '../Data/fakeMovieDetails';
import MovieDetails from '../MovieDetails/MovieDetails';
// import tomatillo from '../assets/tomatillo';
// import SvgTomatillo from '../Tomatillo/Tomatillo.js'
// import { ReactComponent as Tomato } from '../assets/Tomato';

import MovieList from '../MovieList/MovieList';
import MovieCard from '../MovieCard/MovieCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: movieData.movies,
      movieDetails: fakeMovieDetails.movie
    }
  }

  render() {
    return (
      <main className='App'>
        {/* <MovieList movies={this.state.movieData} /> */}
        <Header />
        <MovieDetails movie={this.state.movieDetails} />
        {/* <img src={tomatillo} alt='tomatillo' /> */}
        <img alt="tomatillo" src="./assets/tomatillo.svg" class="user-info__croper--pic" />

        {/* <SvgTomatillo /> */}
      </main>
    )
  }
}

export default App;

//filter/search functionality 
